import pandas as pd
import sys


def get_county_population(fips):

    df = pd.read_csv("../classes/county_population.csv")

    if int(fips) not in df.county_fips_code.values:
        print(0)

    else:
        print(df.loc[df['county_fips_code'] == int(fips)].population.values[0])


if __name__ == '__main__':
    # Map command line arguments to function arguments.
    get_county_population(*sys.argv[1:])
