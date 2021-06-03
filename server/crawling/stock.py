import pandas as pd

def getKOSDAQStockInfo():
    url = 'http://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13&marketType=%s' % 'kosdaqMkt' 
    df = pd.read_html(url, header=0)[0]

    return df

if __name__ == '__main__':
    result_df = getKOSDAQStockInfo()
    print(result_df.info())