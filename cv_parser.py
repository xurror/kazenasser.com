import json

import pandas as pd

SHEETS = ['Professional Experience', 'Volunteer Activity', 'Education']

results = {}
# Load the data
for sheet in SHEETS:
    df = pd.read_excel('data.xlsx', sheet_name=sheet)
    # drop rows where all values are NaN
    df = df.dropna(how='all')

    df['When'] = df['When'].ffill()
    df['Where'] = df['Where'].ffill()
    df['Organization'] = df['Organization'].ffill()

    if sheet != 'Education':
        df['Role'] = df['Role'].ffill()

    df = df.fillna('')

    groups = ['When', 'Where', 'Organization']
    if sheet == 'Education':
        groups.append('Degree Program')
        groups.append('Specialization')
    else:
        groups.append('Role')

    grouped_df = df.groupby(groups).agg(list).reset_index()
    result = grouped_df.to_dict(orient="records")

    results[sheet] = result


json.dump(results, open('data.json', 'w'), indent=2)




