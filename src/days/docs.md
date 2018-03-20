## api of `days` service

### add one day to employee

```
{
  action: ADD_DAY,
  data: {
    day: '2018-03-20',
    employeeId: 'uuid',
    type: 'OFFICE|REMOTE|SICK|HOLIDAY',
    duration: 480
  }
}
```

### add several days to employee

```
{
  action: ADD_SEVERAL_DAYS,
  data: {
    employeeId: 'uuid',
    startDat: '2018-03-20',
    daysCount: 6,
    type: 'OFFICE|REMOTE|SICK|HOLIDAY',
    duration: 480
  }
}
```


### change type|duration of day

```
{
  action: EDIT_DAY,
  data: {
    employeeId: 'uuid',
    day: '2018-03-20',
    type: 'OFFICE|REMOTE|SICK|HOLIDAY',
    duration: 480
  }
}
```

### remove day

```
{
  action: REMOVE_DAY,
  data: {
    employeeId: 'uuid',
    day: '2018-03-20'
  }
}
```