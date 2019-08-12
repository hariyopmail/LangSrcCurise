(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('荥阳市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410182","properties":{"name":"荥阳市","cp":[113.38324,34.786948],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAAA@A@@@AAEAEA@@C@A@A@C@E@C@A@CBABABGBABAB@@C@C@@@CBA@CBA@CBE@G@@@A@AB@BA@AAGA@@CAC@A@AA@AABAB@@A@A@@A@@BAB@@@B@AA@A@@@@A@A@A@A@A@AB@@@B@@BB@@AF@@@BB@@D@DBDA@@BA@@@EFCDCBA@E@EBAA@@AAABA@A@@D@BAB@BBDBBB@@BFBBBBB@D@@BBBBB@@@@@@D@D@@ABA@@@A@AAA@CAA@@@A@A@@@ABB@B@BBBDBBB@@BA@C@AB@BAD@@BBB@@@DDB@BBAB@FADBD@BB@B@B@@B@B@B@B@B@@D@BA@A@ABA@@D@B@D@@B@B@DAB@@@BC@ABCBEH@@ADADABABABCDADADAB@@ABAB@B@B@BBB@BA@CLAFH@@@KlCN@BJ@PDH@@@BBJBDBHBD@BBJBFBB@HD@@D@HDHBHBLDDBD@RFD@DBFBJBBFDHBBBDHLFHFF@@BDBDDDDDBDB@BDHDBBNDFDNDDBFBFBB@PFD@BBFBDBJBFBHBJDF@BBB@LBJBBBJBLDD@HDDBB@FBTDB@PDD@RBH@J@VBH@TBD@L@H@l@J@H@N@BAF@JAJ@PANCFAD@DAFCHCLADAM@@]A@A@AA@@AC@@BADC@@@@@@AAA@A@@@@A@@@@B@@@@B@@BAAABB@@@@B@@@@A@@@@AA@@@@@@@ABA@@B@@@@@@@@@AA@@@BAC@@@@A@@@@B@B@@A@@C@@@A@AA@A@@@@@@A@A@@@AB@@B@@@@@@B@@@@BA@@@@@@@B@@@@@@@BB@@@@@A@@@A@@B@@@@@@AB@@@@A@@AC@A@AB@@@@@@A@@CB@@AA@@A@@@@A@@@AAA@A@@@@BA@@@@@@AA@@A@@A@@B@@@@@@A@@@C@@A@A@@A@@@C@@@@B@@@B@@@B@@@BB@@@@B@B@@@@@BD@@B@@DBB@@B@@@@AAAAC@@@A@@D@@@@@@@A@@@AA@@A@B@@@B@@@@@@A@@@A@@@@@@@C@A@A@@@C@A@AAA@@B@B@@A@C@@@A@@B@B@@@@@@@@C@@BA@G@@C@@C@AB@@A@AA@G@@@@A@AA@C@@A@AC@@@@EAA@@C@@A@@B@@A@A@A@@A@@@@E@AAC@A@E@A@@@@FAF@F@B@@@@A@C@A@CB@@A@A@@B@D@@@@EB@@C@A@@GCCC@@AA@A@AAC@AB@@A@AA@@ABAAA@@AAC@EAA@C@C@G@AAA@A@C@EBC@A@CAA@@@A@ABCB@AA@@@AAAAA@A@CBA@A@EAEA@@@AAA@ABA@@@A@@AA@A@C@A@AAAAA@@AA@A@@@I@A@@@@BAFABAB@BA@A@A@@@A@A@A@A@C@@@@CCCAAA@@@A@AAAJAbE@B@D@@@@F@B@H@B@@F@@F@@@@C@IAG@A@@@@DC@A@C@@@@A@@@@@AA@@@@AB@@@A@@@@@A@A@AB@B@F@@A@@@@@@@@@@@AB@@@BB@@B@BA@A@@@@A@@@A@@@@A@@@C@@BAB@B@@@@@@C@@A@A@A@A@@@CC@@A@AB@@I@@@@@AB@@A@A@@@@@AABAA@@B@FC@@DE@A@CBAA@@C@@C@EA@@A@A@A@@A@@A@@@AA@AB@A@@@CA@@C@AB@@ABAB@@@DAB@D@B@B@D@B@B@BAB@@@BCB@@A@@AA@A@C@C@@B@B@@@B@@A@@@AAAB@@AB@B@D@B@@@B@@@@C@@FC@@@@@@AAA@A@A@A@@AA@@@CA@@AA@@ACAA@@@@C@E@E@@@@@A@@A@@@A@AAC@A@@BA@A@@@AB@@B@@@BD@B@H@H@F@B@@@@A@@@C@A@@@@@@BD@B@@B@@@@A@AD@D@BBB@@BA@BB@@@BB@B@D@BAD@D@@@D@B@DADA@@BA@@@A@ABA@@B@D@@@@@@B@@@DB@@@@@@@B@@@@@@A@@BC@@@@@AACA@@A@@A@@@A@@C@@@@AAA@AACA@@A@@@A@@C@@@AA@@@@@@A@@@A@A@@B@@BB@@B@A@@AC@C@CAC@@@A@A@A@ACC@A@@BC@A@@BABA@A@@BAB@B@@@@@@A@@A@@@@A@@A@A@@@AAAC@@@@A@@A@@@A@A@A@A@A@@@ADA@C@A@A@A@@B@B@B@AA@@C@@BA@EACAC@C@GAA@C@KCCCCAA@A@E@@@AACC@A@@@CBC@@@@BBB@@@@C@@BABAB@@A@@@@A@ABA@@@AA@@@@ABA@A@@AA@A@@@E@A@A@@A@@@@@AAA@AA@CAC@@@AA@A@@@@BAB@BAB@@A@@BA@C@@@AAA@AAA@A@A@A@A@A@ACCAC@@@@C@A@A@@@A@A@@@AA@B@@@BA@@@@@A@A@AAA@@A@A@C@AA@@AA@AAA@KAEBAAA@A@AAI@E@@@CAEAA@A@C@A@CAKCA@ABC@CBA@C@C@A@@@@@@BBB@BDD@BAB@BAFCF@BAB@@@@GBAB@@@B@@@B@@CB@BA@A@CAAACA@A@AA@@AAAA@@@@C@@AA@A@C@@@A@A@@@@A@AC@@A@A@A@AAAAA@A@CBGBABCBA@C@ABA@@B@@@B@@DB@@@BCDCBABCBE@CBCBA@ABA@@@C@CBCBA@A@A@AAAA@@AA@CCC@@CAA@EAEBA@A@A@A@C@A@C@GBC@A@A@CAA@AAA@A@CBCB@@AB@@CBABA@@@E@A@@@ABA@@@C@A@@A@@@@@@C@@@EAOC@@C@@@AA@@A@@@CBA@C@@@A@CAAAA@CBA@@@@@A@@@@AAC@AA@@AC@C@E@AA@@@@@A@@AC@@@A@@@@AC@@@@BA@@@@CAABA@AAA@@@AB@@C@@@AAAA@@AB@BBBBB@@@B@@@@A@AAEAA@@@C@AB@@@B@@BB@BBBB@B@@B@@@B@@AAC@C@C@A@@@@E@A@@AAAACAA@@@@@ABCB@@ABAB@@@@@BBB@@@B@B@@@B@DBB@B@@AB@@@@@BAB@@ABABA@@@@B@@B@BBB@BB@B@BAB@@BB@BBB@@DBDB@@B@B@B@@AB@@AB@B@B@D@@@@BBB@@@@B@B@F@JCB@D@@@@B@@@BBBBBB@@@D@B@@@B@B@B@BAB@@@@@DB@@@@BHBB@BBB@D@@B@@BD@@@B@@A@@BA@@@@@@B@@@@B@B@B@@D@BB@BB@@BB@B@@B@B@BBB@@B@B@DD@@@@@B@D@@BBBB@@@B@@@@A@CB@@@D@@@B@@ABAB@@ABA@AB@@AD@BBDBBDB@@@@@@@BDB@@BD@@BB@@B@B@B@@@@B@@@@@@ABCDEF@@AB@B@B@D@B@@@B@BFD@BBD@@BB@DBB@BBB@@@@DDBBBBBB@B@@ABAB@B@@@@@B@@L@B@B@B@@@@@B@B@B@@A@@@@@@DA@@B@@AB@@@@A@@@@B@B@BBB@@@B@@@B@BBD@@@HDB@@@@@@@B@@@@@BBB@BB@@B@B@@@B@@BBBB@DFFF@B@B@@@@@BA@@@AB@B@BAB@BA@@B@@@@@B@B@@@B@@@B@B@@@@ABA@@BAB@@ABA@@BAB@@@@@B@DAB@@@B@B@@@@A@@BA@@@@@AAAAC@@@@B@@A@@@A@@@@BA@@@@B@B@@A@@BA@@AA@@B@@A@A@@@A@@@@@@@@BB@B@B@@@@BBB@@@@@@@BB@@A@@@@@@B@B@B@B@B@B@F@@@@@@B@@BD@@@@B@@@@B@BJ@@@@JB@B@B@@@@D@BDAAD@BBB@B@B@BBB@BBBBBBBB@BBB@@@@B@J@@@@@@@H@D@B@B@@@B@@@D@@B@B@BBA@@B@@@BBBBAB@@@B@@@B@@@B@@@@@@BA@B@@B@@@@@@@@@@@B@D@@A@@BAB@@GB@@A@@@ABC@@B@@@@@BABA@B@@@AB@@B@@BB@@J@BB@@D@D@@A@@EA@CFE@@BC@@@EB@@@@@@A@A@C@@BA@AA@@@@@@CC@@A@A@@@A@@@@@@@A@@@@DA@@@@@A@@@@B@D@BA@@@I@A@@@@@@@@BEB@@@@BF@@PABDK@EB@D@B[BAE@@AAA@E@@A@@I@A@E@@A@@G@A@@AB@@@BAHE@A@@AA@@@@AB@@@AA@@A@A@@A@@@AB@AAA@@@@@@@A@@C@@@@@@AA@@@@E@A@@@@@@@A@A@A@@@AB@BA@@@A@@A@@A@A@C@@AAAA@@@@@AB@BAB@@A@@@A@@A@AA@@AA@A@@BA@A@C@A@@BAB@@@B@@@@C@@@AAA@@B@@ABA@A@@@ACC@A@A@ABABA@@D@@@@AB@B@B@@@B@@@B@B@@@B@@@@AA@@E@A@A@AA@@@AA@@CA@@A@@@@A@ABE@ABA@A@ABA@CBCA@@AAA@CAAA@E@@A@@AACC@@A@A@GD@@A@"],"encodeOffsets":[[115959,35589]]}}],"UTF8Encoding":true});}));