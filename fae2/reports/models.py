from django.db import models

from django.contrib.auth.models import User

from rulesets.models            import Ruleset

from fae2.settings import APP_DIR


# Create your models here.


EVAL_STATUS = (
    ('-', 'Created'),
    ('I', 'Initalized'),
    ('A', 'Analyzing'),
    ('S', 'Saving'),
    ('C', 'Complete'),
    ('E', 'Error'),
)

FOLLOW_CHOICES = (
  (1, 'Specified domain only'),
  (2, 'Next-level subdomains')
)


DEPTH_CHOICES = (
  (1, 'Top-level page only'),
  (2, 'Include second-level pages'),
  (3, 'Include third-level pages')
)
      
WAIT_TIME_CHOICES = (
  (30000,  ' 30 seconds'),
  (45000,  ' 45 seconds'),
  (60000,  ' 60 seconds'),
  (90000,  ' 90 seconds'),
  (120000, '120 seconds')
)   

MAX_PAGES_CHOICES = (
  (0,   ' All pages'),
  (10,  ' 10 pages'),
  (25,  ' 25 pages'),
  (50,  ' 50 pages'),
  (100,  ' 100 pages')
)  

# ---------------------------------------------------------------
#
# WebsiteReport
#
# ---------------------------------------------------------------

class WebsiteReport(models.Model):

  id    = models.AutoField(primary_key=True)

  user  = models.ForeignKey(User, editable=True)
    
  slug  = models.SlugField(max_length=256, default="", blank=True, editable=False, unique=True)

  title    = models.CharField("Title",  max_length=1024, default="no title", blank=False)
  
  url      = models.URLField("URL",      max_length=1024, default="", blank=False)
  follow   = models.IntegerField("Follow Links in", choices=FOLLOW_CHOICES, default=1, blank=False)
  depth    = models.IntegerField("Depth of Evaluation", choices=DEPTH_CHOICES, default=2, blank=False)
  max_pages  = models.IntegerField("Maxiumum Pages", choices=MAX_PAGES_CHOICES, default=0, blank=False)
  ruleset  = models.ForeignKey(Ruleset, default=2, blank=False)
  
  browser_emulation    = models.CharField("Browser Emulation", max_length=32, default="FIREFOX")

  wait_time            = models.IntegerField("How long to wait for website to load resources (in milliseconds)", choices=WAIT_TIME_CHOICES, default=90000)
  
  span_sub_domains     = models.CharField("Span Sub-Domains (space separated)",    max_length=1024, default="", blank=True)
  exclude_sub_domains  = models.CharField("Exclude Sub-Domains (space separated)", max_length=1024, default="", blank=True)
  include_domains      = models.CharField("Include Domains (space separated)",     max_length=1024, default="", blank=True)
  authorization        = models.TextField("Authentication Information",            max_length=8192, default="", blank=True)
  
  # Archiving information

  archive  = models.BooleanField(default=False)
  stats    = models.BooleanField(default=False)
  
  # fae-util and fae20 processing information

  created      = models.DateTimeField(auto_now_add=True, editable=False)
  last_viewed  = models.DateTimeField(auto_now=True, editable=False)
  status       = models.CharField('Status',  max_length=10, choices=EVAL_STATUS, default='-')  
  
  # processining information    
  processing_time        = models.IntegerField(default=-1)
  processed_urls_count   = models.IntegerField(default=-1)
  unprocessed_urls_count = models.IntegerField(default=-1)
  filtered_urls_count    = models.IntegerField(default=-1)

  data_dir_slug            = models.SlugField(max_length=50, editable=False)
  data_directory           = models.CharField('Data Directory',           max_length=1024, default="")
  data_property_file       = models.CharField('Property File Name',       max_length=1024, default="")
  data_authorization_file  = models.CharField('Authorization File Name',  max_length=1024, default="", blank=True)
  data_multiple_urls_file  = models.CharField('Multiple URLs File Name',  max_length=1024, default="", blank=True)

  log_file                 = models.CharField('Log file',       max_length=1024, default="")
  
  # Rule results summary information
    
  class Meta:
    verbose_name        = "Report"
    verbose_name_plural = "Reports"
    ordering = ['created']

  def __str__(self):
    return "Website Report: " + self.title

  def save(self):



    if len(self.data_dir_slug) == 0:
      DIR = './../../'

      count = WebsiteReport.objects.filter(user=self.user).count() + 1

      self.data_dir_slug = "report_" + "%05d" % (1,)

      self.data_directory          = DIR + "data/" + self.user.username + "/" + self.data_dir_slug 
      self.data_property_file      = self.data_directory + "/" +  self.data_dir_slug + ".properties"
      
      if len(self.authorization) > 0:
        self.data_authorization_file = self.data_directory + "/" +  self.data_dir_slug + ".authorization"
      else:  
        self.data_authorization_file = ""

      self.log_file = DIR + "logs/" + self.user.username + "_" + self.data_dir_slug 
    
      self.status = '-' 

    super(WebsiteReport, self).save() # Call the "real" save() method        


  def set_status_initialized(self):
    self.status = 'I'
    self.save()

  def set_status_analyzing(self):
    self.status = 'A'
    self.save()

  def set_status_saving(self):
    self.status = 'S'
    self.save()

  def set_status_complete(self):
    self.status = 'C'
    self.save()

  def set_status_error(self):
    self.status = 'E'
    self.save()

  def set_rule_numbers(self):
    ws_result = self.ws_results.last()
    
    num = 1
    for wsrr in ws_result.ws_rule_results.all():
      wsrr.rule_number = num
      wsrr.save()
      num += 1  

# ---------------------------------------------------------------
#
# ProcessedURL
#
# ---------------------------------------------------------------
 
class ProcessedURL(models.Model):
  processed_url_id = models.AutoField(primary_key=True)

  ws_report  = models.ForeignKey(WebsiteReport, related_name="processed_urls")
  
  page_seq_num    = models.IntegerField(default=-1)

  url_requested    = models.URLField( 'Processed URL',  max_length=4096)
  url_returned     = models.URLField( 'Returned URL',   max_length=4096)
  redirect         = models.BooleanField("Server redirect", default=False)
  http_status_code = models.IntegerField('http status code')  
  
  url_referenced   = models.URLField( 'Referenced URL', max_length=4096)
 
  dom_time   = models.IntegerField('Loading DOM time')  
  link_time  = models.IntegerField('Retreive links tIme')   
  event_time = models.IntegerField('Event time')  
  eval_time  = models.IntegerField('Evaluation time')   
  save_time  = models.IntegerField('Saving results time')   
  total_time = models.IntegerField('Total processing time')

  class Meta:
    verbose_name        = "URL: Processed"
    verbose_name_plural = "URL: Processed"
    ordering = ['http_status_code', 'url_returned', 'total_time']

  def __unicode__(self):
    return self.url_returned + " (" + str(self.total_time) + " milliseconds)" 
    
  def get_url_requested(self):
    if len(self.url_requested) > 50:
      return self.url_requested[:50] + '...... '   
    else:
      return self.url_requested   
      

  def get_url_returned(self):
    if len(self.url_returned) > 50:
      return self.url_returned[:50] + '...... '   
    else:
      return self.url_returned  

  def get_reference_url(self):
    if len(self.url_referenced) > 50:
      return self.url_referenced[:50] + '...... '   
    else:
      return self.url_referenced  

# ---------------------------------------------------------------
#
# UnprocessedURL
#
# ---------------------------------------------------------------
 
class UnprocessedURL(models.Model):
  unprocessed_url_id = models.AutoField(primary_key=True)

  ws_report  = models.ForeignKey(WebsiteReport, related_name="unprocessed_urls")

  url             = models.URLField( 'Unprocessed URL', max_length=4096)
  url_referenced  = models.URLField( 'Referenced URL',  max_length=4096)
 
  dom_time   = models.IntegerField('Loading DOM time')  
  link_time  = models.IntegerField('Retreive links tIme')   
  event_time = models.IntegerField('Event time')  
  eval_time  = models.IntegerField('Evaluation time')   
  save_time  = models.IntegerField('Saving results time')   
  total_time = models.IntegerField('Total processing time')

  class Meta:
    verbose_name        = "URL: Unprocessed"
    verbose_name_plural = "URL: Unprocessed"
    ordering = ['url', 'url_referenced']

  def __unicode__(self):
    return self.url + " (" + self.url_referenced + ")" 

  def get_url(self):
    if len(self.url) > 50:
      return self.url[:50] + '...... '   
    else:
      return self.url   
     
  def get_reference_url(self):
    if len(self.url_referenced) > 50:
      return self.url_referenced[:50] + '...... '   
    else:
      return self.url_referenced  

# ---------------------------------------------------------------
#
# FilteredURL
#
# ---------------------------------------------------------------
  
class FilteredURL(models.Model):
  filtered_url_id = models.AutoField(primary_key=True)

  ws_report   = models.ForeignKey(WebsiteReport, related_name="filtered_urls")

  url            = models.URLField( 'Other URL',      max_length=4096)
  url_referenced = models.URLField( 'Referenced URL', max_length=4096)

  class Meta:
    verbose_name        = "URL: Filtered"
    verbose_name_plural = "URL: Filtered"
    ordering = ['url_referenced', 'url']

  def __unicode__(self):
    return self.url 

  def get_url(self):
    if len(self.url) > 50:
      return self.url[:50] + '...... '   
    else:
      return self.url   

  def get_domain(self):
    parsed = urlparse(self.url)
    
    return parsed.netloc   
      
     
  def get_reference_url(self):
    if len(self.url_referenced) > 50:
      return self.url_referenced[:50] + '...... '   
    else:
      return self.url_referenced

