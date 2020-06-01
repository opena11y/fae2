"""
Copyright 2014-2016 University of Illinois

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

file: reports/uid.py

Author: Jon Gunderson

"""

from __future__ import print_function
from __future__ import absolute_import
import random
import time
import threading

class Counter(object):
    """Stores a value that is incremented by a random amount
    and reset when it exceeds MAX_COUNTER.

    The increment method accepts a time argument and returns
    a new time value if the counter value exceeds MAX_COUNTER.
    """
    MAX_COUNTER = 0xfffff
    INCREMENT = 0xfff

    def __init__(self):
        self.reset()

    def reset(self):
        self.value = int(random.uniform(1, Counter.MAX_COUNTER))

    def increment(self, now):
        prev = self.value
        self.value += int(random.uniform(1, Counter.INCREMENT))

        while self.value > Counter.MAX_COUNTER or self.value == prev:
            self.reset()
            time.sleep(.01)
            now = int(time.time() * 1000)

        return now

# global module variables

counter = Counter()
lasttime = 0
lock = threading.RLock()

def generate():
    """Generates a new uid.  A uid is unique in time because it combines
    the current time in milliseconds plus a counter variable in case the
    last uid was generated for the same millisecond.
    """
    global counter, lasttime
    lock.acquire() # can't generate two uids at the same time

    try:
        now = int(time.time() * 1000)
        if now == lasttime:
            now = counter.increment(now)
        else:
            counter.reset()

        lasttime = now

        return '%0x%05x' % (now, counter.value)

    finally:
        lock.release()

if __name__ == "__main__":
    uids = [generate() for i in range(0x10)]
    for uid in uids:
      print(uid + " (" + str(len(uid)) + ")")
