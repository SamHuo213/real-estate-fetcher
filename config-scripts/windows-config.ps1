SCHTASKS /Create /TN \REData\REFetchData /XML ./REFetchData.xml /RU "NT AUTHORITY\SYSTEM"
SCHTASKS /Create /TN \REData\REParseData /XML ./REParseData.xml /RU "NT AUTHORITY\SYSTEM"
