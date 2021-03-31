let coords = '' +
    // St Catharines (Top Left)
    '43.183821 -79.316999,43.186539 -79.309532,43.186993 -79.308717,43.186977 -79.308191,43.191021 -79.301196,43.192312 -79.299318,43.195488 -79.292677,' +
    '43.195613 -79.291465,43.197576 -79.286251,43.198045 -79.285479,43.199109 -79.281681,43.199328 -79.280382,43.201221 -79.274503,43.203958 -79.267830,43.205311 -79.264236,' +
    '43.210427 -79.264450,43.211082 -79.263503,43.210348 -79.263352,43.210310 -79.263339,43.210140 -79.263338,43.210134 -79.263452,43.207502 -79.263247,43.207359 -79.261799,' +
    '43.206878 -79.260664,43.206775 -79.259662,43.206780 -79.259308,43.206495 -79.259093,43.207332 -79.254252,43.208157 -79.252310,43.208740 -79.251285,43.209960 -79.248420,' +
    '43.210015 -79.247867,43.212619 -79.243146,43.221782 -79.225925,43.226613 -79.220947,43.243755 -79.219252,43.245559 -79.217763,43.244512 -79.207356,43.244203 -79.207503,' +
    '43.242046 -79.211802,43.236401 -79.211122,43.235455 -79.212688,43.230913 -79.210692,43.229867 -79.213203,43.227436 -79.212237,43.226184 -79.208260,' +

    // Niagara on the Lake (Top Right)
    '43.259425 -79.128345,43.256313 -79.116129,43.262540 -79.085803,43.262187 -79.076050,43.258033 -79.068588,43.257139 -79.065131,43.257299 -79.064784,' +

    // Niagara Falls (Right)
    '43.2567100524903 -79.0624313354492,43.2559509277344 -79.0580825805663,43.2528190612794 -79.0566101074219,43.2487602233887 -79.0569763183594,' +
    '43.2437400817872 -79.0568542480468,43.2413406372071 -79.0567169189453,43.2387390136719 -79.0568542480468,43.2365989685059 -79.056884765625,' +
    '43.2360954284669 -79.0570678710938,43.233268737793 -79.0562667846679,43.2300987243652 -79.0554428100586,43.22603225708 -79.0552673339844,' +
    '43.2227210998536 -79.05517578125,43.2210311889648 -79.0562210083008,43.2168998718262 -79.0561370849609,43.2152709960938 -79.0560607910156,' +
    '43.213722229004 -79.0556259155273,43.2116355895997 -79.055320739746,43.2101783752443 -79.0489120483398,43.2020149230957 -79.0487518310547,' +
    '43.1979217529297 -79.0490112304687,43.1971664428711 -79.0490493774414,43.1967849731445 -79.0491409301758,43.1964111328125 -79.0494537353516,' +
    '43.1952133178712 -79.0496292114258,43.1945037841797 -79.0521697998046,43.1846542358399 -79.0529022216797,43.1745681762696 -79.050407409668,' +
    '43.1682205200196 -79.0485229492187,43.1660499572754 -79.0486679077148,43.1648712158204 -79.0486907958984,43.1646881103517 -79.0491638183594,' +
    '43.1608924865723 -79.0475463867188,43.1584205627442 -79.0454177856445,43.1539192199708 -79.0439529418945,43.1498680114747 -79.0438690185546,' +

    //  Niagara Falls (Right Bottom)
    '43.1482467651368 -79.0437469482422,43.1457710266113 -79.0435333251953,43.1416893005372 -79.0451812744141,43.137092590332 -79.0475463867188,' +
    '43.1342964172363 -79.0505371093749,43.1314888000488 -79.0510330200195,43.1311416625976 -79.0511016845703,43.1310958862306 -79.0566024780273,' +
    '43.1272201538087 -79.0601425170898,43.1253700256348 -79.0621185302734,43.1243400573732 -79.0652084350586,43.1233520507812 -79.0682678222656,' +
    '43.121898651123 -79.0700607299805,43.1200294494629 -79.0687103271484,43.1182518005372 -79.0667266845703,43.1164817810059 -79.0663146972656,' +
    '43.1162757873536 -79.0654067993163,43.1158180236816 -79.0649414062499,43.1155853271485 -79.0634536743164,43.1145973205568 -79.0615234374999,' +
    '43.112979888916 -79.0606002807617,43.1112022399903 -79.0601272583008,43.1102867126465 -79.0597534179688,43.1087989807129 -79.0593261718749,' +
    '43.1071205139161 -79.0593872070312,43.1065330505372 -79.0587158203125,43.1059646606445 -79.0586242675781,43.1058883666993 -79.0585784912109,' +
    '43.1055755615236 -79.0588150024414,43.1051292419434 -79.0597076416015,43.1033935546876 -79.0597457885742,43.1030197143555 -79.0603713989257,' +
    '43.1017494201661 -79.0608825683594,43.1007118225099 -79.0615997314453,43.0997123718263 -79.0657958984374,43.0915451049805 -79.0680770874023,' +
    '43.0892791748047 -79.0715026855469,43.085880279541 -79.0731964111328,43.083854675293 -79.0748977661133,43.0818252563477 -79.0747604370117,' +
    '43.0813293457032 -79.0683135986328,43.0797157287599 -79.067268371582,43.0776710510254 -79.0656509399414,43.0765571594238 -79.0652542114258,' +
    '43.0763053894042 -79.0602111816406,43.0730857849121 -79.053840637207,43.072494506836 -79.0474548339844,43.0713081359864 -79.0408172607421,' +
    '43.0692443847657 -79.0398483276367,43.0656013488771 -79.0374145507812,43.0670089721681 -79.0292663574218,43.0653381347656 -79.0162277221679,' +
    '43.0657196044921 -79.0052490234374,43.0628471374512 -79.0017395019531,43.0582275390626 -79.002082824707,43.0554199218749 -79.0025405883789,' +
    '43.0540695190431 -79.0031433105468,43.0524520874024 -79.0032043457031,43.0522994995118 -79.0032348632812,43.0522117614747 -79.0034713745117,' +
    '43.051067352295 -79.0036773681641,43.0501022338867 -79.0052947998047,43.0473937988282 -79.0061874389648,43.0440177917482 -79.006492614746,' +
    '43.0434646606445 -79.0070648193359,43.0423088073732 -79.0076293945312,43.0411605834961 -79.0093231201172,43.0374717712403 -79.0110397338867,' +
    '43.0342407226564 -79.0134048461914,43.0314483642578 -79.0157699584961,43.0286598205566 -79.0173797607422,43.0260887145997 -79.0180892944336,' +
    '43.0249519348146 -79.0207595825195,43.0215682983399 -79.0209426879883,43.0213317871094 -79.0210266113281,43.0212287902832 -79.0221328735351,' +
    '43.0180206298829 -79.022590637207,43.014820098877 -79.0236129760742,43.0102386474609 -79.0227508544922,43.0057106018068 -79.0221252441406,' +
    '43.0015525817871 -79.0217971801758,42.9993705749512 -79.0212478637695,42.9985580444337 -79.0207061767578,42.9977531433105 -79.0192337036133,' +
    '42.9955673217773 -79.0191497802734,42.9954452514649 -79.0190887451171,42.9953498840333 -79.0170364379883,42.9926223754884 -79.0143814086913,' +
    '42.9891014099122 -79.0121841430664,42.9873580932617 -79.0082473754883,42.9842262268066 -79.0071868896484,42.9833793640138 -79.0057067871093,' +
    '42.9825248718262 -79.0026779174804,42.980770111084 -79.0007095336914,42.9800224304199 -79.0043792724609,42.9793663024903 -79.0126800537109,' +
    '42.9810485839844 -79.0114135742188,42.9761657714844 -79.0162582397461,42.977897644043 -79.0110855102539,42.9729309082032 -79.016975402832,' +
    '42.9769020080568 -79.0211639404296,42.9825096130371 -79.0242309570312,42.9824981689454 -79.0246124267578,42.9825248718262 -79.024803161621,' +
    '42.9825325012207 -79.0280075073242,42.9825248718262 -79.0287475585938,42.98250579834 -79.0292282104492,42.98250579834 -79.0291595458984,' +
    '42.9771652221681 -79.0291213989258,42.9748077392578 -79.0290756225585,42.971263885498 -79.0289840698242,42.970359802246 -79.0290451049805,' +
    '42.9696006774903 -79.0290374755859,42.968807220459 -79.0290298461914,42.9685173034669 -79.0290298461914,42.9684104919434 -79.0290222167969,' +
    '42.9676475524902 -79.0290222167969,42.9673614501953 -79.0304718017578,42.9673461914062 -79.0308074951171,42.9673461914062 -79.0310974121093,' +
    '42.9673423767091 -79.0569839477539,42.9671249389648 -79.0708236694336,42.9672851562501 -79.0801010131835,42.9673919677735 -79.0851745605468,' +
    '42.9674987792968 -79.0870742797851,42.9675025939942 -79.0880889892578,42.9675216674805 -79.1052627563477,42.96785736084 -79.1078643798828,' +
    '42.9678688049317 -79.1216812133788,42.9679145812989 -79.1222381591797,42.9679107666016 -79.1225585937499,42.9679183959961 -79.1225509643554,' +
    '42.9636878967286 -79.1225509643554,42.9628181457519 -79.1211318969725,42.9631462097169 -79.1208877563477,42.9632148742676 -79.115119934082,' +
    '42.9632568359376 -79.1151275634766,42.962329864502 -79.1151351928711,42.9612197875977 -79.1151351928711,42.959738 -79.115185,42.959579 -79.168981,43.041434 -79.169276,' +

    // Thorold (Left bottom)
    '43.042587 -79.174952,43.035892 -79.184335,43.041049 -79.200139,43.035958 -79.203337,43.029174 -79.204562,43.028481 -79.218018,43.026732 -79.222159,' +
    '43.026754 -79.244772,43.031364 -79.244733,43.031421 -79.249752,43.026766 -79.249846,43.026837 -79.267587,43.054280 -79.268052,43.052301 -79.274111,' +
    '43.052387 -79.277812,43.054080 -79.281889,43.058853 -79.286006,43.108680 -79.287367,' +

    // St. Catharines (Left)
    '43.1079406738281 -79.3108215332031,43.111728668213 -79.3108139038085,43.1124916076661 -79.3108673095703,43.1140632629396 -79.3108749389648,43.1141471862794 -79.3108444213867,' +
    '43.115348815918 -79.3108444213867,43.1167221069337 -79.3109741210937,43.1211395263672 -79.3109817504882,43.1212272644044 -79.3110427856445,43.122859954834 -79.3116455078124,' +
    '43.1389236450196 -79.311653137207,43.1391143798829 -79.3118362426757,43.1392555236816 -79.3119812011719,43.1393280029298 -79.3122253417968,43.1393928527833 -79.3125305175781,' +
    '43.1394157409669 -79.3126983642578,43.1394996643066 -79.3128433227539,43.1396751403809 -79.3129730224609,43.1399192810059 -79.313232421875,43.1401290893555 -79.3132629394531,' +
    '43.1402473449707 -79.3131484985352,43.1404685974122 -79.3126144409179,43.1406707763673 -79.3123550415039,43.1408271789551 -79.3122177124023,43.1410331726074 -79.312141418457,' +
    '43.1412925720216 -79.3119049072266,43.141487121582 -79.3117904663086,43.1419792175293 -79.3112564086914,43.1422080993653 -79.3109817504882,43.1425361633301 -79.3109741210937,' +
    '43.1427688598634 -79.3112945556639,43.1431159973145 -79.3113021850586,43.1432609558105 -79.3116912841797,43.1434478759766 -79.3114318847656,43.14359664917 -79.3115081787109,' +
    '43.1437072753907 -79.3117980957031,43.143871307373 -79.3122177124023,43.1441650390625 -79.3124084472656,43.1441879272462 -79.3126144409179,43.1442451477051 -79.3129501342773,' +
    '43.1442489624025 -79.3130722045898,43.1443405151367 -79.3131332397461,43.144458770752 -79.3132705688476,43.1447067260742 -79.3134613037109,43.1449127197266 -79.3135375976562,' +
    '43.145076751709 -79.313720703125,43.1452865600586 -79.3141555786132,43.145565032959 -79.3144989013672,43.1457138061524 -79.3145904541016,43.1457138061524 -79.3146896362305,' +
    '43.1457862854004 -79.3149719238281,43.1458282470703 -79.3151092529296,43.1458206176759 -79.3152160644531,43.1458129882814 -79.3152694702148,43.1457176208497 -79.3154144287109,' +
    '43.1457710266113 -79.3155975341797,43.1457901000978 -79.3159561157226,43.1456604003906 -79.3162231445312,43.1454772949219 -79.31640625,43.145435333252 -79.3165435791016,' +
    '43.1454544067382 -79.3165893554688,43.1455268859864 -79.3166351318358,43.1456718444825 -79.3165893554688,43.1458358764648 -79.3163757324219,43.1460189819335 -79.315933227539,' +
    '43.1463356018066 -79.3156509399413,43.1464576721193 -79.3156738281249,43.146556854248 -79.3156204223633,43.1467094421387 -79.3154602050781,43.1469345092775 -79.3151702880859,' +
    '43.1472358703614 -79.3149871826171,43.1475830078125 -79.3149948120117,43.1479454040528 -79.3149642944336,43.1480979919434 -79.3149032592773,43.1482238769532 -79.3146209716796,' +
    '43.1484146118165 -79.314567565918,43.1485061645507 -79.314453125,43.1486930847169 -79.3144454956055,43.1489906311035 -79.3147659301758,43.1497611999512 -79.3148956298828,' +
    '43.1498985290528 -79.3150482177734,43.1501159667969 -79.3152465820312,43.1501083374024 -79.3153915405273,43.1501846313478 -79.3155059814453,43.150276184082 -79.3156280517578,' +
    '43.1505813598634 -79.3156661987304,43.150863647461 -79.3156585693359,43.1511955261231 -79.3154983520508,43.1516532897949 -79.3152542114258,43.1521072387696 -79.3152542114258,' +
    '43.1522521972657 -79.3152847290038,43.1523590087891 -79.3154983520508,43.1524276733399 -79.3157043457031,43.1525192260742 -79.3162536621093,43.1529884338378 -79.3162841796875,' +
    '43.1531333923341 -79.3162155151367,43.1532936096192 -79.3158950805664,43.1534423828126 -79.3155822753906,43.1534385681153 -79.3153686523437,43.1532516479493 -79.3151473999023,' +
    '43.1532707214356 -79.3147430419922,43.1538925170898 -79.3144912719727,43.1543579101564 -79.314224243164,43.1545715332032 -79.3141403198242,43.1547203063965 -79.3141326904296,' +
    '43.1549186706543 -79.314079284668,43.1550254821778 -79.3138885498047,43.1552124023438 -79.313865661621,43.1552925109863 -79.3138961791992,43.1554565429688 -79.3142700195312,' +
    '43.155632019043 -79.3143157958984,43.1558570861816 -79.3142623901367,43.1559371948242 -79.3139266967773,43.1560859680176 -79.3137130737305,43.1562194824219 -79.313606262207,' +
    '43.1564979553223 -79.3135452270508,43.1566734313965 -79.3134384155273,43.1567993164063 -79.313362121582,43.1569709777833 -79.3133697509765,43.1571578979493 -79.3134765624999,' +
    '43.1572494506837 -79.3149948120117,43.1572265625001 -79.3151626586914,43.1572952270508 -79.3153305053711,43.157413482666 -79.3155975341797,43.158073425293 -79.3159484863281,' +
    '43.158618927002 -79.3159637451171,43.1590614318849 -79.3158950805664,43.1592140197754 -79.3157958984375,43.1593551635743 -79.3157119750977,43.1595726013184 -79.3157196044922,' +
    '43.1597328186036 -79.3157806396484,43.1598777770996 -79.3157730102538,43.1600112915039 -79.3155288696289,43.1603240966796 -79.3152465820312,43.1605072021486 -79.3151092529296,' +
    '43.1606674194337 -79.3152465820312,43.1608428955079 -79.3154830932617,43.1609802246094 -79.3158111572266,43.1609382629396 -79.3161392211913,43.1608390808105 -79.3163223266601,' +
    '43.1607437133789 -79.3165130615234,43.160556793213 -79.3165893554688,43.160530090332 -79.3166809082031,43.160530090332 -79.316780090332,43.1605682373047 -79.3168487548828,' +
    '43.1606788635254 -79.3168334960938,43.1608467102051 -79.3161468505859,43.1620979309083 -79.3161544799804,43.1623229980469 -79.3166198730468,43.1628532409669 -79.3166351318358,' +
    '43.1631164550782 -79.3162612915039,43.1633682250978 -79.3156585693359,43.1634140014648 -79.3154907226561,43.1637001037598 -79.314712524414,43.1649932861329 -79.3147583007812,' +
    '43.1651306152344 -79.3152542114258,43.1655616760255 -79.3158645629882,43.1657409667969 -79.3160934448242,43.1658782958984 -79.3162155151367,43.1662406921387 -79.3164138793945,' +
    '43.1663703918457 -79.316535949707,43.1667213439941 -79.3168258666991,43.1678619384766 -79.316780090332,43.1681594848633 -79.3164901733398,43.1684226989747 -79.3164672851562,' +
    '43.1685791015625 -79.3171005249023,43.1692352294923 -79.3171844482421,43.1695594787599 -79.3167724609375,43.16947555542 -79.3166885375977,43.169776916504 -79.3169479370117,' +
    '43.1698608398437 -79.3170547485352,43.1698913574219 -79.3171310424805,43.1699714660645 -79.318115234375,43.1705894470215 -79.3194427490234,43.1714401245117 -79.3187942504882,' +
    '43.1719093322754 -79.3184051513672,43.1721420288087 -79.3181915283203,43.1724128723146 -79.3180084228516,43.1726341247558 -79.3180084228516,43.1728744506837 -79.3180694580078,' +
    '43.1730766296387 -79.3182907104492,43.1731643676758 -79.318618774414,43.1732368469238 -79.3189392089844,43.1733436584474 -79.3192367553711,43.1734352111816 -79.319450378418,' +
    '43.1736221313478 -79.3196792602538,43.1738815307617 -79.3201141357422,43.1746635437012 -79.3202743530273,43.174919128418 -79.3203582763672,43.1752052307129 -79.3202896118164,' +
    '43.1754341125489 -79.3201065063477,43.1756362915039 -79.319450378418,43.1759719848632 -79.3191833496093,43.1761474609376 -79.3188400268555,43.1764869689941 -79.3187713623047,' +
    '43.176700592041 -79.3188018798828,43.1769752502443 -79.318962097168,43.1772460937501 -79.3198547363281,43.1782035827637 -79.3204345703124,43.1786041259767 -79.3208084106445,' +
    '43.179470062256 -79.320816040039,43.1797904968262 -79.320831298828,43.180118560791 -79.3208389282227,43.1804389953614 -79.320831298828,43.1812324523926 -79.320831298828,' +
    '43.1815147399903 -79.320701599121,43.1817245483398 -79.320556640625,43.1818733215333 -79.3203659057617,43.1819801330566 -79.3200454711913,43.1820793151856 -79.3194885253906,' +
    '43.1822891235352 -79.3187332153319,43.1824645996094 -79.3178634643554,43.1826972961427 -79.3176727294921';

let coordsArray = coords.split(',');
let boundaries = [];

coordsArray.forEach(function (el, i) {
    let point = el.split(' ');

    boundaries.push({
        lat: parseFloat(point[0]),
        lng: parseFloat(point[1])
    });
});

function initMap() {
    let styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ],
        {name: 'Styled Map'});

    let myLatLng = {
        lat: 43.120300,
        lng: -79.155374
    };

    let map = new google.maps.Map(document.getElementById('deliveryMap'), {
        zoom: 11,
        center: myLatLng,
        disableDefaultUI: true,
        mapTypeId: 'terrain'
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Construct the polygon.
    let deliveryArea = new google.maps.Polygon({
        paths: boundaries,
        strokeColor: '#5a8c16',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#8dc63f',
        fillOpacity: 0.35
    });

    deliveryArea.setMap(map);
}