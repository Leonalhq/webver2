# SQL output is imported as a pandas dataframe variable called "df"
import pandas as pd
import numpy as np
import seaborn as sns
from datetime import date, datetime, timedelta
import calendar as cal

# Function: Return calendar with deadlines highlighted in a different color
# Input: dataframe with a column indicating deadline dates and optional color parameter (default colors are navy blue (no deadline) and pale yellow(deadline)
# Output: calendar image

def calendar_deadlines(df,color="YlGnBu_r"):
  df['deadline']= pd.to_datetime(df['deadline'])
  df['date']=df['deadline'].dt.day
  df['month']=df['deadline'].dt.month
  df['year']=df['deadline'].dt.year

  Index= ['W1', 'W2', 'W3', 'W4', 'W5']
  Cols = ['Sun', 'Mon', 'Tue', 'Wed','Thu','Fri','Sat']
  df1 = pd.DataFrame(0, index=Index, columns=Cols)

  #defining date variables
  first_day=date.today().replace(day=1)
  current_month=date.today().month
  current_year=date.today().year
  current_date=date.today().day
  last_day_prev_month=(first_day-timedelta(days=1)).day
  week1_begin= first_day - timedelta(days=first_day.weekday()+1)
  week1_begin_day=week1_begin.weekday()
  last_day_cur_month=(first_day.replace(month=first_day.month+1)-timedelta(days=1)).day

  #building calendar dates
  if(first_day.weekday==6):
    w1=np.arange(1,8)
  else:
    w1a=np.arange(week1_begin.day,last_day_prev_month+1)
    w1b=np.arange(1,8-w1a.size)
    w1=np.concatenate((w1a,w1b), axis=0)

  wp=w1
  m=w1
  for i in range(2,6):
    end_val=min(wp[-1]+7,last_day_cur_month)
    if(end_val==wp[-1]+7):
       wn=np.arange(wp[-1]+1,end_val+1)
    else:
       wna=np.arange(wp[-1]+1,end_val+1)
       wnb=np.arange(1,8-wna.size)
       wn=np.concatenate((wna,wnb), axis=0)
    m=np.column_stack((m, wn))
    wp=wn

  labels =  np.transpose(m)

  #marking deadlines from input dataframe
  for i in range(len(df['deadline'])):
    a=np.where(m==df['date'][i])[0]
    b=np.where(m==df['date'][i])[1]
    year=df['year'][i]
    month=df['month'][i]
    if(a.size)>1:
      if(current_month==1):
        if(year<current_year or (year==current_year and df['date'][i]<8)):
          a=a[0]
          b=b[0]
        else:
          a=a[1]
          b=b[1]
      else:
        if(month<current_month or (month==current_month and df['date'][i]<8)):
          a=a[0]
          b=b[0]
        else:
          a=a[1]
          b=b[1]
    else:
      a=a[0]
      b=b[0]
    df1.iloc[b,a]=1

  #build plot
  plt=sns.heatmap(df1, annot=labels, square=True, cbar=False, yticklabels=False, cmap=color)
  plt.set_title(str(cal.month_name[current_month]) + ' ' + str(current_year))
  ttl = plt.title
  ttl.set_position([.5, 1.08])
  plt.xaxis.set_ticks_position('top')

  return plt

# Use Periscope to visualize a dataframe or an image by passing data to periscope.output()
periscope.output(calendar_deadlines(df))