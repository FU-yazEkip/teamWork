const countries = [
    {
      "country": "China",
      "edgar2020": "11680.4160",
      "edgar2020PC": "8.1994",
      "percGlobal_edgar2020": "32.4800",
      "bp2021": "12039.8000"
    },
    {
      "country": "United States",
      "edgar2020": "4535.3011",
      "edgar2020PC": "13.6840",
      "percGlobal_edgar2020": "12.6100",
      "bp2021": "5167.9000"
    },
    {
      "country": "India",
      "edgar2020": "2411.7329",
      "edgar2020PC": "1.7436",
      "percGlobal_edgar2020": "6.7100",
      "bp2021": "2797.2000"
    },
    {
      "country": "Russia",
      "edgar2020": "1674.2280",
      "edgar2020PC": "11.6438",
      "percGlobal_edgar2020": "4.6600",
      "bp2021": "2172.1000"
    },
    {
      "country": "Japan",
      "edgar2020": "1061.7744",
      "edgar2020PC": "8.3938",
      "percGlobal_edgar2020": "2.9500",
      "bp2021": "1081.7000"
    },
    {
      "country": "Iran",
      "edgar2020": "690.2409",
      "edgar2020PC": "8.2577",
      "percGlobal_edgar2020": "1.9200",
      "bp2021": "892.7000"
    },
    {
      "country": "Germany",
      "edgar2020": "636.8765",
      "edgar2020PC": "7.7159",
      "percGlobal_edgar2020": "1.7700",
      "bp2021": "646.7000"
    },
    {
      "country": "South Korea",
      "edgar2020": "621.4684",
      "edgar2020PC": "12.0657",
      "percGlobal_edgar2020": "1.7300",
      "bp2021": "628.7000"
    },
    {
      "country": "Saudi Arabia",
      "edgar2020": "588.8144",
      "edgar2020PC": "16.9640",
      "percGlobal_edgar2020": "1.6400",
      "bp2021": "679.4000"
    },
    {
      "country": "Indonesia",
      "edgar2020": "568.2671",
      "edgar2020PC": "2.0875",
      "percGlobal_edgar2020": "1.5800",
      "bp2021": "713.1000"
    },
    {
      "country": "Canada",
      "edgar2020": "542.7874",
      "edgar2020PC": "14.4346",
      "percGlobal_edgar2020": "1.5100",
      "bp2021": "595.4000"
    },
    {
      "country": "Brazil",
      "edgar2020": "451.8006",
      "edgar2020PC": "2.1126",
      "percGlobal_edgar2020": "1.2600",
      "bp2021": "495.8000"
    },
    {
      "country": "South Africa",
      "edgar2020": "435.1269",
      "edgar2020PC": "7.4100",
      "percGlobal_edgar2020": "1.2100",
      "bp2021": "472.9000"
    },
    {
      "country": "Mexico",
      "edgar2020": "407.6951",
      "edgar2020PC": "3.0455",
      "percGlobal_edgar2020": "1.1300",
      "bp2021": 444
    },
    {
      "country": "Turkey",
      "edgar2020": "405.2034",
      "edgar2020PC": "4.8333",
      "percGlobal_edgar2020": "1.1300",
      "bp2021": "447.9000"
    },
    {
      "country": "Australia",
      "edgar2020": "386.4392",
      "edgar2020PC": "15.2152",
      "percGlobal_edgar2020": "1.0700",
      "bp2021": "433.4000"
    },
    {
      "country": "Vietnam",
      "edgar2020": "321.9253",
      "edgar2020PC": "3.2729",
      "percGlobal_edgar2020": "0.9000",
      "bp2021": "339.8000"
    },
    {
      "country": "United Kingdom",
      "edgar2020": "313.7289",
      "edgar2020PC": "4.6593",
      "percGlobal_edgar2020": "0.8700",
      "bp2021": "348.4000"
    },
    {
      "country": "Italy",
      "edgar2020": "297.3518",
      "edgar2020PC": "5.0286",
      "percGlobal_edgar2020": "0.8300",
      "bp2021": "322.1000"
    },
    {
      "country": "Poland",
      "edgar2020": "292.5624",
      "edgar2020PC": "7.7107",
      "percGlobal_edgar2020": "0.8100",
      "bp2021": "318.4000"
    },
    {
      "country": "Taiwan",
      "edgar2020": "280.5609",
      "edgar2020PC": "11.7794",
      "percGlobal_edgar2020": "0.7800",
      "bp2021": "285.3000"
    },
    {
      "country": "France",
      "edgar2020": "279.9907",
      "edgar2020PC": "4.2603",
      "percGlobal_edgar2020": "0.7800",
      "bp2021": "281.3000"
    },
    {
      "country": "Egypt",
      "edgar2020": "269.5455",
      "edgar2020PC": "2.6184",
      "percGlobal_edgar2020": "0.7500",
      "bp2021": "267.1000"
    },
    {
      "country": "Kazakhstan",
      "edgar2020": "267.0982",
      "edgar2020PC": "14.2246",
      "percGlobal_edgar2020": "0.7400",
      "bp2021": "272.1000"
    },
    {
      "country": "Malaysia",
      "edgar2020": "262.1713",
      "edgar2020PC": "7.9762",
      "percGlobal_edgar2020": "0.7300",
      "bp2021": "266.7000"
    },
    {
      "country": "Thailand",
      "edgar2020": "255.4642",
      "edgar2020PC": "3.6805",
      "percGlobal_edgar2020": "0.7100",
      "bp2021": "301.8000"
    },
    {
      "country": "Pakistan",
      "edgar2020": "217.0246",
      "edgar2020PC": "1.0416",
      "percGlobal_edgar2020": "0.0600",
      "bp2021": "258.4000"
    },
    {
      "country": "Spain",
      "edgar2020": "214.8467",
      "edgar2020PC": "4.6244",
      "percGlobal_edgar2020": "0.6000",
      "bp2021": "254.5000"
    },
    {
      "country": "United Arab Emirates",
      "edgar2020": "203.1364",
      "edgar2020PC": "20.7004",
      "percGlobal_edgar2020": "0.5600",
      "bp2021": "293.2000"
    },
    {
      "country": "Iraq",
      "edgar2020": "191.3006",
      "edgar2020PC": "4.6093",
      "percGlobal_edgar2020": "0.5300",
      "bp2021": "289.7000"
    },
    {
      "country": "Ukraine",
      "edgar2020": "189.3048",
      "edgar2020PC": "4.3439",
      "percGlobal_edgar2020": "0.5300",
      "bp2021": "179.7000"
    },
    {
      "country": "Argentina",
      "edgar2020": "176.5096",
      "edgar2020PC": "3.8784",
      "percGlobal_edgar2020": "0.4900",
      "bp2021": "212.8000"
    },
    {
      "country": "Algeria",
      "edgar2020": "163.4734",
      "edgar2020PC": "3.7725",
      "percGlobal_edgar2020": "0.4500",
      "bp2021": "245.2000"
    },
    {
      "country": "Netherlands",
      "edgar2020": "144.6949",
      "edgar2020PC": "8.4217",
      "percGlobal_edgar2020": "0.4000",
      "bp2021": "178.4000"
    },
    {
      "country": "Philippines",
      "edgar2020": "139.1583",
      "edgar2020PC": "1.2685",
      "percGlobal_edgar2020": "0.3900",
      "bp2021": "149.5000"
    },
    {
      "country": "Nigeria",
      "edgar2020": "126.9201",
      "edgar2020PC": "0.6157",
      "percGlobal_edgar2020": "0.3500",
      "bp2021": ""
    },
    {
      "country": "Bangladesh",
      "edgar2020": "108.5041",
      "edgar2020PC": "0.6391",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": "112.8000"
    },
    {
      "country": "Qatar",
      "edgar2020": "99.4872",
      "edgar2020PC": "35.6354",
      "percGlobal_edgar2020": "0.2800",
      "bp2021": "139.2000"
    },
    {
      "country": "Czech Republic",
      "edgar2020": "92.0823",
      "edgar2020PC": "8.6597",
      "percGlobal_edgar2020": "0.2600",
      "bp2021": "94.3000"
    },
    {
      "country": "Uzbekistan",
      "edgar2020": "90.3739",
      "edgar2020PC": "2.7192",
      "percGlobal_edgar2020": "0.2500",
      "bp2021": "142.9000"
    },
    {
      "country": "Colombia",
      "edgar2020": "90.2524",
      "edgar2020PC": "1.7971",
      "percGlobal_edgar2020": "0.2500",
      "bp2021": "105.4000"
    },
    {
      "country": "Kuwait",
      "edgar2020": "89.9744",
      "edgar2020PC": "20.9103",
      "percGlobal_edgar2020": "0.2500",
      "bp2021": "126.8000"
    },
    {
      "country": "Venezuela",
      "edgar2020": "88.9519",
      "edgar2020PC": "2.6815",
      "percGlobal_edgar2020": "0.2500",
      "bp2021": "171.1000"
    },
    {
      "country": "Oman",
      "edgar2020": "87.0502",
      "edgar2020PC": "16.9039",
      "percGlobal_edgar2020": "0.2400",
      "bp2021": "107.8000"
    },
    {
      "country": "Chile",
      "edgar2020": "84.5560",
      "edgar2020PC": "4.5774",
      "percGlobal_edgar2020": "0.2400",
      "bp2021": "88.2000"
    },
    {
      "country": "Belgium",
      "edgar2020": "84.0799",
      "edgar2020PC": "7.2358",
      "percGlobal_edgar2020": "0.2300",
      "bp2021": "117.5000"
    },
    {
      "country": "Turkmenistan",
      "edgar2020": "80.6425",
      "edgar2020PC": "13.3709",
      "percGlobal_edgar2020": "0.2200",
      "bp2021": "180.2000"
    },
    {
      "country": "Serbia",
      "edgar2020": "77.5255",
      "edgar2020PC": "8.3063",
      "percGlobal_edgar2020": "0.2200",
      "bp2021": ""
    },
    {
      "country": "Romania",
      "edgar2020": "75.7974",
      "edgar2020PC": "3.9094",
      "percGlobal_edgar2020": "0.2100",
      "bp2021": "76.5000"
    },
    {
      "country": "Morocco",
      "edgar2020": "67.7518",
      "edgar2020PC": "1.8276",
      "percGlobal_edgar2020": "0.1900",
      "bp2021": 74
    },
    {
      "country": "Austria",
      "edgar2020": "63.6911",
      "edgar2020PC": "7.2523",
      "percGlobal_edgar2020": "0.1800",
      "bp2021": "60.3000"
    },
    {
      "country": "Israel",
      "edgar2020": "62.4209",
      "edgar2020PC": "7.1636",
      "percGlobal_edgar2020": "0.1700",
      "bp2021": "65.5000"
    },
    {
      "country": "Belarus",
      "edgar2020": "58.9694",
      "edgar2020PC": "6.2631",
      "percGlobal_edgar2020": "0.1600",
      "bp2021": "60.7000"
    },
    {
      "country": "Greece",
      "edgar2020": "56.1303",
      "edgar2020PC": "5.0556",
      "percGlobal_edgar2020": "0.1600",
      "bp2021": "59.5000"
    },
    {
      "country": "Singapore",
      "edgar2020": "56.1076",
      "edgar2020PC": "9.4536",
      "percGlobal_edgar2020": "0.1600",
      "bp2021": ""
    },
    {
      "country": "Libya",
      "edgar2020": "52.6059",
      "edgar2020PC": "7.8962",
      "percGlobal_edgar2020": "0.1500",
      "bp2021": ""
    },
    {
      "country": "Hungary",
      "edgar2020": "49.4052",
      "edgar2020PC": "5.1350",
      "percGlobal_edgar2020": "0.1400",
      "bp2021": "47.1000"
    },
    {
      "country": "Peru",
      "edgar2020": "44.4795",
      "edgar2020PC": "1.3352",
      "percGlobal_edgar2020": "0.1200",
      "bp2021": "63.3000"
    },
    {
      "country": "Sweden",
      "edgar2020": "42.2967",
      "edgar2020PC": "4.1788",
      "percGlobal_edgar2020": "0.1200",
      "bp2021": "41.4000"
    },
    {
      "country": "Norway",
      "edgar2020": "42.1817",
      "edgar2020PC": "7.7402",
      "percGlobal_edgar2020": "0.1200",
      "bp2021": "35.2000"
    },
    {
      "country": "Laos",
      "edgar2020": "41.8390",
      "edgar2020PC": "5.8395",
      "percGlobal_edgar2020": "0.1200",
      "bp2021": ""
    },
    {
      "country": "Finland",
      "edgar2020": "40.7044",
      "edgar2020PC": "7.2945",
      "percGlobal_edgar2020": "0.1100",
      "bp2021": ""
    },
    {
      "country": "Portugal",
      "edgar2020": "40.4329",
      "edgar2020PC": "3.9569",
      "percGlobal_edgar2020": "0.1100",
      "bp2021": ""
    },
    {
      "country": "Mongolia",
      "edgar2020": "38.2307",
      "edgar2020PC": "11.9121",
      "percGlobal_edgar2020": "0.1100",
      "bp2021": ""
    },
    {
      "country": "Bulgaria",
      "edgar2020": "38.0123",
      "edgar2020PC": "5.4769",
      "percGlobal_edgar2020": "0.1100",
      "bp2021": "53.2000"
    },
    {
      "country": "Myanmar",
      "edgar2020": "37.7110",
      "edgar2020PC": "0.6881",
      "percGlobal_edgar2020": "0.1000",
      "bp2021": ""
    },
    {
      "country": "Bahrain",
      "edgar2020": "36.6722",
      "edgar2020PC": "21.6003",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Switzerland",
      "edgar2020": "35.2994",
      "edgar2020PC": "4.0712",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Azerbaijan",
      "edgar2020": "33.8947",
      "edgar2020PC": "3.3560",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": "45.7000"
    },
    {
      "country": "Ecuador",
      "edgar2020": "33.2786",
      "edgar2020PC": "1.9197",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": "46.3000"
    },
    {
      "country": "New Zealand",
      "edgar2020": "33.0344",
      "edgar2020PC": "6.8332",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": "33.9000"
    },
    {
      "country": "Ireland",
      "edgar2020": "32.6480",
      "edgar2020PC": "6.6792",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": "36.7000"
    },
    {
      "country": "Hong Kong",
      "edgar2020": "32.4342",
      "edgar2020PC": "4.2973",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": "65.2000"
    },
    {
      "country": "North Korea",
      "edgar2020": "32.2446",
      "edgar2020PC": "1.2478",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": ""
    },
    {
      "country": "Slovakia",
      "edgar2020": "31.8706",
      "edgar2020PC": "5.8463",
      "percGlobal_edgar2020": "0.0900",
      "bp2021": "33.2000"
    },
    {
      "country": "Dominican Republic",
      "edgar2020": "29.0928",
      "edgar2020PC": "2.6190",
      "percGlobal_edgar2020": "0.0800",
      "bp2021": ""
    },
    {
      "country": "Tunisia",
      "edgar2020": "28.5894",
      "edgar2020PC": "2.4018",
      "percGlobal_edgar2020": "0.0800",
      "bp2021": ""
    },
    {
      "country": "Lebanon",
      "edgar2020": "26.7695",
      "edgar2020PC": "4.4469",
      "percGlobal_edgar2020": "0.0700",
      "bp2021": ""
    },
    {
      "country": "Jordan",
      "edgar2020": "26.4824",
      "edgar2020PC": "2.5941",
      "percGlobal_edgar2020": "0.0700",
      "bp2021": ""
    },
    {
      "country": "Denmark",
      "edgar2020": "25.7076",
      "edgar2020PC": "4.4348",
      "percGlobal_edgar2020": "0.0700",
      "bp2021": "29.9000"
    },
    {
      "country": "Syria",
      "edgar2020": "25.5699",
      "edgar2020PC": "1.3512",
      "percGlobal_edgar2020": "0.0700",
      "bp2021": ""
    },
    {
      "country": "Sri Lanka",
      "edgar2020": "23.7337",
      "edgar2020PC": "1.1257",
      "percGlobal_edgar2020": "0.0700",
      "bp2021": ""
    },
    {
      "country": "Bosnia and Herzegovina",
      "edgar2020": "23.4325",
      "edgar2020PC": "6.6984",
      "percGlobal_edgar2020": "0.0700",
      "bp2021": ""
    },
    {
      "country": "Cuba",
      "edgar2020": "22.9377",
      "edgar2020PC": "1.9954",
      "percGlobal_edgar2020": "0.0600",
      "bp2021": ""
    },
    {
      "country": "Angola",
      "edgar2020": "22.5136",
      "edgar2020PC": "0.6858",
      "percGlobal_edgar2020": "0.0600",
      "bp2021": ""
    },
    {
      "country": "Bolivia",
      "edgar2020": "20.6396",
      "edgar2020PC": "1.7879",
      "percGlobal_edgar2020": "0.0600",
      "bp2021": ""
    },
    {
      "country": "Sudan",
      "edgar2020": "19.9511",
      "edgar2020PC": "0.3491",
      "percGlobal_edgar2020": "0.0600",
      "bp2021": ""
    },
    {
      "country": "Guatemala",
      "edgar2020": "19.6169",
      "edgar2020PC": "1.0953",
      "percGlobal_edgar2020": "0.0500",
      "bp2021": ""
    },
    {
      "country": "Nepal",
      "edgar2020": "17.8920",
      "edgar2020PC": "0.5913",
      "percGlobal_edgar2020": "0.0500",
      "bp2021": ""
    },
    {
      "country": "Croatia",
      "edgar2020": "17.6975",
      "edgar2020PC": "4.2997",
      "percGlobal_edgar2020": "0.0500",
      "bp2021": "17.4000"
    },
    {
      "country": "Ethiopia",
      "edgar2020": "17.0093",
      "edgar2020PC": "0.1508",
      "percGlobal_edgar2020": "0.0500",
      "bp2021": ""
    },
    {
      "country": "Ghana",
      "edgar2020": "16.5205",
      "edgar2020PC": "0.5375",
      "percGlobal_edgar2020": "0.0500",
      "bp2021": ""
    },
    {
      "country": "Kenya",
      "edgar2020": "16.4136",
      "edgar2020PC": "0.3068",
      "percGlobal_edgar2020": "0.0500",
      "bp2021": ""
    },
    {
      "country": "Cambodia",
      "edgar2020": "15.8196",
      "edgar2020PC": "0.9464",
      "percGlobal_edgar2020": "0.0400",
      "bp2021": ""
    },
    {
      "country": "Estonia",
      "edgar2020": "14.3700",
      "edgar2020PC": "11.0491",
      "percGlobal_edgar2020": "0.0400",
      "bp2021": "18.1000"
    },
    {
      "country": "Slovenia",
      "edgar2020": "13.7821",
      "edgar2020PC": "6.6194",
      "percGlobal_edgar2020": "0.0400",
      "bp2021": "12.1000"
    },
    {
      "country": "Lithuania",
      "edgar2020": "13.5491",
      "edgar2020PC": "4.7499",
      "percGlobal_edgar2020": "0.0400",
      "bp2021": "12.7000"
    },
    {
      "country": "Ivory Coast",
      "edgar2020": "12.0983",
      "edgar2020PC": "0.4623",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Afghanistan",
      "edgar2020": "11.9479",
      "edgar2020PC": "0.3140",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Zimbabwe",
      "edgar2020": "11.5586",
      "edgar2020PC": "0.6500",
      "percGlobal_edgar2020": 3,
      "bp2021": ""
    },
    {
      "country": "Tanzania",
      "edgar2020": "11.4684",
      "edgar2020PC": "0.1827",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Kyrgyzstan",
      "edgar2020": "11.4571",
      "edgar2020PC": "1.8181",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Honduras",
      "edgar2020": "10.6306",
      "edgar2020PC": "1.0938",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Georgia",
      "edgar2020": "10.4439",
      "edgar2020PC": "2.6789",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Yemen",
      "edgar2020": "10.3185",
      "edgar2020PC": "0.3412",
      "percGlobal_edgar2020": 3,
      "bp2021": ""
    },
    {
      "country": "Senegal",
      "edgar2020": "10.0613",
      "edgar2020PC": "0.5850",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Mozambique",
      "edgar2020": "9.9368",
      "edgar2020PC": "0.3076",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Cameroon",
      "edgar2020": "9.3139",
      "edgar2020PC": "0.3588",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Panama",
      "edgar2020": "9.3012",
      "edgar2020PC": "2.1684",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Tajikistan",
      "edgar2020": "8.9969",
      "edgar2020PC": "0.9495",
      "percGlobal_edgar2020": "0.0300",
      "bp2021": ""
    },
    {
      "country": "Moldova",
      "edgar2020": "8.4865",
      "edgar2020PC": "2.1123",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Luxembourg",
      "edgar2020": "7.9979",
      "edgar2020PC": "13.2428",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Brunei",
      "edgar2020": "7.9808",
      "edgar2020PC": "17.9539",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Jamaica",
      "edgar2020": "7.8816",
      "edgar2020PC": "2.7055",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Paraguay",
      "edgar2020": "7.8365",
      "edgar2020PC": "1.1090",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Costa Rica",
      "edgar2020": "7.8176",
      "edgar2020PC": "1.5498",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "North Macedonia",
      "edgar2020": "7.6992",
      "edgar2020PC": "3.6873",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": "8.8000"
    },
    {
      "country": "Latvia",
      "edgar2020": "7.4459",
      "edgar2020PC": "3.9334",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Benin",
      "edgar2020": "7.3456",
      "edgar2020PC": "0.6059",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "New Caledonia",
      "edgar2020": "7.3227",
      "edgar2020PC": "25.5224",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Papua New Guinea",
      "edgar2020": "7.2567",
      "edgar2020PC": "0.8288",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Botswana",
      "edgar2020": "7.0547",
      "edgar2020PC": "2.9203",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "El Salvador",
      "edgar2020": "6.7912",
      "edgar2020PC": "1.0482",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Cyprus",
      "edgar2020": "6.2716",
      "edgar2020PC": "5.1945",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Republic of the Congo",
      "edgar2020": "6.1829",
      "edgar2020PC": "1.0872",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Gabon",
      "edgar2020": "5.9462",
      "edgar2020PC": "2.7640",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Uruguay",
      "edgar2020": "5.8782",
      "edgar2020PC": "1.6822",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Armenia",
      "edgar2020": "5.8188",
      "edgar2020PC": "1.9801",
      "percGlobal_edgar2020": "0.0200",
      "bp2021": ""
    },
    {
      "country": "Uganda",
      "edgar2020": "5.3517",
      "edgar2020PC": "0.1134",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Albania",
      "edgar2020": "5.1031",
      "edgar2020PC": "1.7345",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Nicaragua",
      "edgar2020": "5.0963",
      "edgar2020PC": "0.7942",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Equatorial Guinea",
      "edgar2020": "4.2760",
      "edgar2020PC": "3.0407",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Madagascar",
      "edgar2020": "4.2516",
      "edgar2020PC": "0.1535",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Namibia",
      "edgar2020": "4.0130",
      "edgar2020PC": "1.4882",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Puerto Rico",
      "edgar2020": "3.9636",
      "edgar2020PC": "1.0857",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Mauritius",
      "edgar2020": "3.6284",
      "edgar2020PC": "2.8478",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Mali",
      "edgar2020": "3.4822",
      "edgar2020PC": "0.1717",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Burkina Faso",
      "edgar2020": "3.2497",
      "edgar2020PC": "0.1555",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "DR Congo",
      "edgar2020": "3.2328",
      "edgar2020PC": "0.0361",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Iceland",
      "edgar2020": "3.1693",
      "edgar2020PC": "9.2338",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Haiti",
      "edgar2020": "3.0100",
      "edgar2020PC": "0.2647",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Togo",
      "edgar2020": "2.8371",
      "edgar2020PC": "0.3384",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Guinea",
      "edgar2020": "2.7743",
      "edgar2020PC": "0.2018",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Curacao",
      "edgar2020": "2.7584",
      "edgar2020PC": "16.8712",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Mauritania",
      "edgar2020": "2.6660",
      "edgar2020PC": "0.5573",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Reunion",
      "edgar2020": "2.4126",
      "edgar2020PC": "2.6910",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Fiji",
      "edgar2020": "2.3801",
      "edgar2020PC": "2.5733",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Macau",
      "edgar2020": "2.1883",
      "edgar2020PC": "3.3569",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Niger",
      "edgar2020": "2.1622",
      "edgar2020PC": "0.0898",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Bahamas",
      "edgar2020": "1.8878",
      "edgar2020PC": "4.6402",
      "percGlobal_edgar2020": "0.0100",
      "bp2021": ""
    },
    {
      "country": "Martinique",
      "edgar2020": "1.7737",
      "edgar2020PC": "4.6016",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Maldives",
      "edgar2020": "1.6663",
      "edgar2020PC": "3.6311",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Suriname",
      "edgar2020": "1.6421",
      "edgar2020PC": "2.8423",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Guadeloupe",
      "edgar2020": "1.5892",
      "edgar2020PC": "3.5439",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Malta",
      "edgar2020": "1.5550",
      "edgar2020PC": "3.5799",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Guyana",
      "edgar2020": "1.5154",
      "edgar2020PC": "1.9163",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Eswatini",
      "edgar2020": "1.4628",
      "edgar2020PC": "1.0163",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Bhutan",
      "edgar2020": "1.4579",
      "edgar2020PC": "1.7455",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Malawi",
      "edgar2020": "1.3849",
      "edgar2020PC": "0.0683",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Liberia",
      "edgar2020": "1.2614",
      "edgar2020PC": "0.2471",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Palau",
      "edgar2020": "1.2408",
      "edgar2020PC": "55.2892",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Seychelles",
      "edgar2020": "1.1775",
      "edgar2020PC": "12.2518",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Barbados",
      "edgar2020": "1.1367",
      "edgar2020PC": "3.9529",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Rwanda",
      "edgar2020": "1.0136",
      "edgar2020PC": "0.0775",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Timor-Leste",
      "edgar2020": "1.0136",
      "edgar2020PC": "0.7338",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Sierra Leone",
      "edgar2020": "1.0077",
      "edgar2020PC": "0.1252",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "French Polynesia",
      "edgar2020": "0.9385",
      "edgar2020PC": "3.2279",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Djibouti",
      "edgar2020": "0.8545",
      "edgar2020PC": "0.8546",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Chad",
      "edgar2020": "0.8207",
      "edgar2020PC": "0.0504",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Cape Verde",
      "edgar2020": "0.8034",
      "edgar2020PC": "1.4161",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Somalia",
      "edgar2020": "0.7742",
      "edgar2020PC": "0.0481",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Aruba",
      "edgar2020": "0.7387",
      "edgar2020PC": "6.9402",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Eritrea",
      "edgar2020": "0.7268",
      "edgar2020PC": "0.1338",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Lesotho",
      "edgar2020": "0.6529",
      "edgar2020PC": "0.2812",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Gambia",
      "edgar2020": "0.5175",
      "edgar2020PC": "0.2256",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Bermuda",
      "edgar2020": "0.4958",
      "edgar2020PC": "8.1764",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Greenland",
      "edgar2020": "0.4733",
      "edgar2020PC": "8.3365",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Antigua and Barbuda",
      "edgar2020": "0.4573",
      "edgar2020PC": "4.3502",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "French Guiana",
      "edgar2020": "0.4552",
      "edgar2020PC": "1.4973",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Cayman Islands",
      "edgar2020": "0.4225",
      "edgar2020PC": "6.6132",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Belize",
      "edgar2020": "0.4032",
      "edgar2020PC": "1.0130",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Samoa",
      "edgar2020": "0.3554",
      "edgar2020PC": "1.7762",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Central African Republic",
      "edgar2020": "0.3541",
      "edgar2020PC": "0.0720",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Solomon Islands",
      "edgar2020": "0.3059",
      "edgar2020PC": "0.4726",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Guinea-Bissau",
      "edgar2020": "0.2896",
      "edgar2020PC": "0.1448",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Saint Lucia",
      "edgar2020": "0.2891",
      "edgar2020PC": "1.5955",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Burundi",
      "edgar2020": "0.2867",
      "edgar2020PC": "0.0240",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Comoros",
      "edgar2020": "0.2498",
      "edgar2020PC": "0.2873",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Turks and Caicos Islands",
      "edgar2020": "0.1906",
      "edgar2020PC": "5.1567",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Grenada",
      "edgar2020": "0.1845",
      "edgar2020PC": "1.6882",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Vanuatu",
      "edgar2020": "0.1730",
      "edgar2020PC": "0.5885",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Dominica",
      "edgar2020": "0.1525",
      "edgar2020PC": "2.0321",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "British Virgin Islands",
      "edgar2020": "0.1419",
      "edgar2020PC": "4.3476",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Saint Kitts and Nevis",
      "edgar2020": "0.1386",
      "edgar2020PC": "2.4389",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Sao Tome and Principe",
      "edgar2020": "0.1348",
      "edgar2020PC": "0.6183",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Tonga",
      "edgar2020": "0.1238",
      "edgar2020PC": "1.1149",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "edgar2020": "0.1159",
      "edgar2020PC": "1.0464",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Kiribati",
      "edgar2020": "0.0637",
      "edgar2020PC": "0.5200",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Cook Islands",
      "edgar2020": "0.0553",
      "edgar2020PC": "3.1591",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Saint Pierre and Miquelon",
      "edgar2020": "0.0468",
      "edgar2020PC": "7.3037",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Falkland Islands",
      "edgar2020": "0.0295",
      "edgar2020PC": "10.0862",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Anguilla",
      "edgar2020": "0.0239",
      "edgar2020PC": "1.5612",
      "percGlobal_edgar2020": 0,
      "bp2021": ""
    },
    {
      "country": "Faroe Islands",
      "edgar2020": "0.0019",
      "edgar2020PC": "0.0391",
      "percGlobal_edgar2020": "0.00,"
    }
];

var btn = document.getElementById("btn");
var input = document.getElementById("inputDiv").value;
var loadData = document.getElementById("infoDiv");

function showResult(){

btn = document.getElementById("btn");
input = document.getElementById("inputDiv").value;
loadData = document.getElementById("infoDiv");

    for(let i = 0; i < countries.length; ++i){
        if(input === countries[i].country){
            loadData.innerHTML = "??lke: " + countries[i].country + "<br>"+
            "edgar2020: " + countries[i].edgar2020 + "<br>"+
            "percGlobal_edgar2020: " + countries[i].percGlobal_edgar2020 + "<br>"+
            "bp2021: " + countries[i].bp2021;
        }
    }
}