# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-02 17:34
from __future__ import absolute_import
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wcag20', '__first__'),
        ('ruleCategories', '__first__'),
        ('reports', '__first__'),
        ('rules', '__first__'),
        ('websiteResults', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='PageGuidelineResult',
            fields=[
                ('result_value', models.IntegerField(default=0)),
                ('implementation_pass_fail_score', models.IntegerField(default=-1)),
                ('implementation_score', models.IntegerField(default=-1)),
                ('implementation_pass_fail_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Pass/Fail Status')),
                ('implementation_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Status')),
                ('manual_check_status', models.CharField(choices=[(b'NC', b'Not Checked'), (b'NA', b'Not Applicable'), (b'P', b'Passed'), (b'F', b'Fail')], default=b'NC', max_length=2, verbose_name=b'Manual Check Status')),
                ('rules_violation', models.IntegerField(default=0)),
                ('rules_warning', models.IntegerField(default=0)),
                ('rules_manual_check', models.IntegerField(default=0)),
                ('rules_passed', models.IntegerField(default=0)),
                ('rules_na', models.IntegerField(default=0)),
                ('rules_with_hidden_content', models.IntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('slug', models.SlugField(blank=True, default=b'none', editable=False, max_length=32)),
                ('guideline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wcag20.Guideline')),
            ],
            options={
                'ordering': ['guideline'],
                'verbose_name': 'Page Guideline Result',
                'verbose_name_plural': 'Page Guideline Results',
            },
        ),
        migrations.CreateModel(
            name='PageResult',
            fields=[
                ('result_value', models.IntegerField(default=0)),
                ('implementation_pass_fail_score', models.IntegerField(default=-1)),
                ('implementation_score', models.IntegerField(default=-1)),
                ('implementation_pass_fail_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Pass/Fail Status')),
                ('implementation_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Status')),
                ('manual_check_status', models.CharField(choices=[(b'NC', b'Not Checked'), (b'NA', b'Not Applicable'), (b'P', b'Passed'), (b'F', b'Fail')], default=b'NC', max_length=2, verbose_name=b'Manual Check Status')),
                ('rules_violation', models.IntegerField(default=0)),
                ('rules_warning', models.IntegerField(default=0)),
                ('rules_manual_check', models.IntegerField(default=0)),
                ('rules_passed', models.IntegerField(default=0)),
                ('rules_na', models.IntegerField(default=0)),
                ('rules_with_hidden_content', models.IntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('page_number', models.IntegerField(default=-1)),
                ('url', models.URLField(default=b'', max_length=4096, verbose_name=b'Page URL')),
                ('url_encoded', models.URLField(default=b'', max_length=8192, verbose_name=b'Page URL (encoded)')),
                ('title', models.CharField(default=b'', max_length=512, verbose_name=b'Page Title')),
                ('ws_report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_all_results', to='reports.WebsiteReport')),
            ],
            options={
                'ordering': ['page_number'],
                'verbose_name': 'Page Result',
                'verbose_name_plural': 'Page Results',
            },
        ),
        migrations.CreateModel(
            name='PageRuleCategoryResult',
            fields=[
                ('result_value', models.IntegerField(default=0)),
                ('implementation_pass_fail_score', models.IntegerField(default=-1)),
                ('implementation_score', models.IntegerField(default=-1)),
                ('implementation_pass_fail_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Pass/Fail Status')),
                ('implementation_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Status')),
                ('manual_check_status', models.CharField(choices=[(b'NC', b'Not Checked'), (b'NA', b'Not Applicable'), (b'P', b'Passed'), (b'F', b'Fail')], default=b'NC', max_length=2, verbose_name=b'Manual Check Status')),
                ('rules_violation', models.IntegerField(default=0)),
                ('rules_warning', models.IntegerField(default=0)),
                ('rules_manual_check', models.IntegerField(default=0)),
                ('rules_passed', models.IntegerField(default=0)),
                ('rules_na', models.IntegerField(default=0)),
                ('rules_with_hidden_content', models.IntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('slug', models.SlugField(blank=True, default=b'none', editable=False, max_length=32)),
                ('page_result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_rc_results', to='pageResults.PageResult')),
                ('rule_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ruleCategories.RuleCategory')),
                ('ws_rc_result', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='page_rc_results', to='websiteResults.WebsiteRuleCategoryResult')),
            ],
            options={
                'ordering': ['rule_category'],
                'verbose_name': 'Page Rule Category Result',
                'verbose_name_plural': 'Page Rule Category Results',
            },
        ),
        migrations.CreateModel(
            name='PageRuleResult',
            fields=[
                ('result_value', models.IntegerField(default=0)),
                ('implementation_pass_fail_score', models.IntegerField(default=-1)),
                ('implementation_score', models.IntegerField(default=-1)),
                ('implementation_pass_fail_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Pass/Fail Status')),
                ('implementation_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Status')),
                ('manual_check_status', models.CharField(choices=[(b'NC', b'Not Checked'), (b'NA', b'Not Applicable'), (b'P', b'Passed'), (b'F', b'Fail')], default=b'NC', max_length=2, verbose_name=b'Manual Check Status')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('rule_required', models.BooleanField(default=False)),
                ('slug', models.SlugField(blank=True, default=b'none', editable=False, max_length=32)),
                ('result_message', models.CharField(default=b'none', max_length=4096, verbose_name=b'Rule Result Message')),
                ('elements_passed', models.IntegerField(default=0)),
                ('elements_violation', models.IntegerField(default=0)),
                ('elements_warning', models.IntegerField(default=0)),
                ('elements_hidden', models.IntegerField(default=0)),
                ('elements_mc_identified', models.IntegerField(default=0)),
                ('elements_mc_passed', models.IntegerField(default=0)),
                ('elements_mc_failed', models.IntegerField(default=0)),
                ('elements_mc_na', models.IntegerField(default=0)),
                ('element_results_json', models.TextField(blank=True, default=b'')),
                ('page_gl_result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_rule_results', to='pageResults.PageGuidelineResult')),
                ('page_rc_result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_rule_results', to='pageResults.PageRuleCategoryResult')),
                ('page_result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_rule_results', to='pageResults.PageResult')),
            ],
            options={
                'ordering': ['-elements_violation', '-elements_warning', '-elements_mc_identified', '-elements_passed', '-elements_hidden'],
                'verbose_name': 'Page Rule Result',
                'verbose_name_plural': 'Page Rule Results',
            },
        ),
        migrations.CreateModel(
            name='PageRuleScopeResult',
            fields=[
                ('result_value', models.IntegerField(default=0)),
                ('implementation_pass_fail_score', models.IntegerField(default=-1)),
                ('implementation_score', models.IntegerField(default=-1)),
                ('implementation_pass_fail_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Pass/Fail Status')),
                ('implementation_status', models.CharField(choices=[(b'U', b'Undefined'), (b'NA', b'Not applicable'), (b'NI', b'Not Implemented'), (b'PI', b'Partial Implementation'), (b'AC', b'Almost Complete'), (b'C', b'Complete')], default=b'U', max_length=2, verbose_name=b'Implementation Status')),
                ('manual_check_status', models.CharField(choices=[(b'NC', b'Not Checked'), (b'NA', b'Not Applicable'), (b'P', b'Passed'), (b'F', b'Fail')], default=b'NC', max_length=2, verbose_name=b'Manual Check Status')),
                ('rules_violation', models.IntegerField(default=0)),
                ('rules_warning', models.IntegerField(default=0)),
                ('rules_manual_check', models.IntegerField(default=0)),
                ('rules_passed', models.IntegerField(default=0)),
                ('rules_na', models.IntegerField(default=0)),
                ('rules_with_hidden_content', models.IntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('slug', models.SlugField(blank=True, default=b'none', editable=False, max_length=32)),
                ('page_result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_rs_results', to='pageResults.PageResult')),
                ('rule_scope', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rules.RuleScope')),
                ('ws_rs_result', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='page_rs_results', to='websiteResults.WebsiteRuleScopeResult')),
            ],
            options={
                'ordering': ['-rule_scope'],
                'verbose_name': 'Page Rule Scope Result',
                'verbose_name_plural': 'Page Rule Scope Results',
            },
        ),
        migrations.AddField(
            model_name='pageruleresult',
            name='page_rs_result',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_rule_results', to='pageResults.PageRuleScopeResult'),
        ),
        migrations.AddField(
            model_name='pageruleresult',
            name='rule',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rules.Rule'),
        ),
        migrations.AddField(
            model_name='pageruleresult',
            name='ws_rule_result',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='page_rule_results', to='websiteResults.WebsiteRuleResult'),
        ),
        migrations.AddField(
            model_name='pageguidelineresult',
            name='page_result',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_gl_results', to='pageResults.PageResult'),
        ),
        migrations.AddField(
            model_name='pageguidelineresult',
            name='ws_gl_result',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='page_gl_results', to='websiteResults.WebsiteGuidelineResult'),
        ),
    ]
