from selenium import webdriver
import requests
from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
# driver = webdriver.Chrome()
#####################
#######Brands########
#####################
target_url = 'https://www.luckyscent.com/brands/'
headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36'}
page_all = requests.get(target_url, headers=headers)
soup = BeautifulSoup(page_all.content, 'html.parser')


target = soup.find_all('div', class_='col-sm-4 brand-item')
# print(len(target))
# print(target[0])
# for div in target:
#     a_tag = div.find('a')
#     print(a_tag.text.strip())


############################
#Search Julliet Has A Gun###
###########################
driver = webdriver.Chrome()
target_url = 'https://www.fragrantica.com/'
driver.get(target_url)

# # DissMiss 먼저 클릭
# dismiss = driver.find_element(By.XPATH, '//button[@class="left"]')
# dismiss.click()
# print('dismiss')


# # 검색창 클릭
# search_box = driver.find_element_by_id('searchInput')
# search_box = driver.find_element(By.XPATH, '//input[@id="searchInput"]')
# search_box.send_keys('Julliet Has A Gun')
# print('search Juliiet Has A Gun')
# search_box.send_keys(Keys.RETURN)
# target = soup.find_all('input', class_='form-control ui-autocomplete-input suggest')

# # search_box = driver.find_element_by_class_name('super-search aa-input')


# # 검색어 입력

# # 폼 제출 (예: Enter 키 입력)
# search_box.send_keys(Keys.RETURN)

# 브라우저 닫기
time.sleep(1000)
driver.quit()
# print(target[0])
# for each in target:
#     print(each)