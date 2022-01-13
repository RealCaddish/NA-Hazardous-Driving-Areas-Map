# NA-Hazardous-Driving-Areas-Map
A map of hazardous driving areas in North America (United States, Canada, Mexico). This project seeks to create a web map of collisions in North America and produce an aggregation of state/province area divided by the total number of collisions from a point-in-polygon analysis. The source for this dataset was found on kaggle at <a href="https://www.kaggle.com/terenceshin/hazardous-driving-spots-around-the-world"> This Link</a>. 

## Table of Contents 

1. Data Processing in Python
2. Data Geoprocessing 
3. Data Mapping 
4. Conclusion / Citations 


### <b> Chapter 1 - Data Processing in Python </b>
A Jupyter Notebook was utilized to process the data downloaded from the aforementioned kaggle link. The data was cleaned, trimmed, and output to a csv file format. Cleaning included changing data types from objects to floats/integers. Additionally, fields were removed from the dataframe deemed irrelevant. Lastly, the data was output to csv and json formats for use in webmapping. 


