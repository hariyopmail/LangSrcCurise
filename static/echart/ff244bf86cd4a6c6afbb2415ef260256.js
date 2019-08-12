(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('衢江区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330803","properties":{"name":"衢江区","cp":[118.95946,28.97978],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABA@A@C@@@AA@A@@@@AA@AA@@A@A@@AC@A@@@AC@AAA@A@@@AAAAA@A@A@@AA@@A@A@@A@@AA@@@A@@AAA@AAA@@AAAA@@@@@@BAB@BAB@BAB@@@BBD@@@BA@@B@@BB@@@B@B@BA@@BA@@@@BC@@@A@@@@@@@@@A@@@@BA@@@@A@AABA@AA@BAC@A@@@@A@A@@BBB@BAB@@@B@DAB@@AB@@@@@B@@@B@@@B@@@B@@@@AB@@@BA@@@A@A@@@@@@@A@A@A@A@AAC@AAA@@@A@@@ABA@@@AB@@AD@@@BA@C@@BA@@BC@A@AB@@ABA@A@A@A@AAA@@A@A@@AAA@A@@@AA@@A@C@@A@@@AA@B@AA@A@@@AA@AA@A@@AA@@C@AA@@@A@AA@@@@@A@@B@@A@@@A@@@ABA@ABA@@@@B@@@B@BAB@B@@@B@@@B@@@B@@@B@@A@@@@B@@@BBD@B@@AB@@CB@B@@@@A@@BB@@@@BB@@BB@@@BBBBB@BB@BCB@@@@A@@@AACA@AA@@@@@AB@@@B@BB@DBBB@@@@A@C@A@A@@@C@@@@@@BB@@@B@BB@BB@@@@BB@D@BBB@@BA@A@A@@@@@A@BBA@BB@@@B@@A@@@@BA@ABBB@@@B@@@BB@@B@@@B@B@@@@BB@B@@@@@B@@A@B@@BB@@@B@B@@@@@BB@A@B@@@B@@@B@@AB@@BBBB@@D@@@@@BB@B@@@@@BB@BB@@@BB@@@@B@BBB@@B@BB@B@@@@@@@B@@@BA@@B@B@@@@@B@B@@@DD@B@@@B@@BBB@@D@@B@B@@@DA@A@A@@@@@A@@A@A@@A@@@A@@AA@@@@@@B@B@BB@B@BB@@@B@@@@A@@@ADA@@@AB@@@@A@@AA@@@@B@BBB@@BBBBB@BB@@@@@BB@B@B@@@@@@B@@@BBBBB@@@BB@@BBBB@@@@B@B@@B@@B@@@BA@@BAB@B@@@B@@@@AB@@@DB@@B@B@@@BA@@B@BB@@B@@@@@BA@@@A@ABA@@@A@@BA@@@@B@@A@@@@@@BA@AB@@A@@@A@@@ABA@A@@B@@@@@D@BB@@D@@@B@B@@@B@@@@@@@@@@@@@@@B@@A@@@A@@@A@A@ABAAAA@@AAAB@@@A@A@@@@A@@@CB@D@B@@@@AB@@@@A@@B@@@B@@B@AB@@@@@B@BA@@@A@@@@@@B@@@B@B@@AF@B@@@B@@A@@@@@@B@@@@@B@@B@@B@B@B@@@@@@A@@@@BBB@@@@@B@@@@@BBB@@@@AB@@@DB@@@@B@@@B@@B@BBBBDB@B@B@@@@@D@@AB@BA@@@@@@@B@@AB@@@B@@BBB@D@@@BB@ABA@@@C@@@C@@@A@BBA@@B@@B@@@A@@@A@@A@@@B@B@B@@@BA@B@B@@B@B@@@@@@A@@@@@@@A@@B@@@@@@@B@@@@@@A@@BB@@@@B@@@@@@@B@@@@A@AB@@@BA@@@@BBBBB@BBB@@A@@B@@@@@@@B@@@@AB@@@@B@A@BBA@@@A@@B@B@B@@B@@@@@@BB@@B@@B@@@@@A@@@BB@@@B@@B@@@@DBB@@@@@B@@@@@@@B@A@@@@AB@@@@A@@BA@@@A@BB@BBB@@@B@@@@@D@@@@B@@@B@@@B@@@@B@@AA@@@@@@@B@@@@@BA@@@@B@@@BA@@B@@@BA@@@@D@@@B@@@B@@@@@B@@AB@@@@A@@BA@@@AB@BA@A@A@@@A@@B@@@AA@A@@@@BA@@@@@A@@B@@@@A@@@AB@@@@@BA@@@@@@@@B@@@B@B@@@@@@@@@@@B@@@@@@@@@@A@@@ABB@@@BA@BB@ABA@@@@B@@@B@B@@A@AA@BAB@@@B@@A@@@@@B@@BA@AB@@A@@B@@AB@@A@DB@@BBB@@@BAB@@@BB@@BA@@AB@@@@@@BB@@@A@@B@@@AB@B@@AA@B@@@@@@@@A@@A@@A@@@AA@B@@@@@@@BB@@@B@@BA@@@@@ABAB@@@@A@A@A@@@A@@@AB@@ABAB@@@@@B@@@B@@@@@BAB@@@@AAA@@B@@@@@@@@@@@@@@@@@AA@@B@@@@A@@@@@@@AB@@@BAA@@A@@B@@BD@@@BB@@@@B@@@@AB@@@@@A@B@@A@@@@@@@@@AB@B@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@AB@@@@A@@AA@@@@BB@A@@@BB@@@B@@@@A@@@@@@A@B@@@@@@A@@@@@@@@@@@A@@@@B@@@@B@A@A@@B@@@B@@@@@@@B@@AB@D@@B@@@@@B@@@@@@@@@@@@BB@B@@A@@@@@A@@@B@@BBBA@@@@@BA@@B@@B@@BB@@@@@B@@@@AB@@A@B@@@BA@@B@@@@@@@BAB@@@@A@@@A@@@@@AA@BA@@@A@@@@@BBBA@BB@@@@@@B@AA@A@A@@@@@@D@@@BB@@B@@@@B@@@@B@@@@@@@@@@A@AA@@A@AA@@A@@BB@A@@@@BA@@B@BA@B@@B@B@@@@@B@@A@A@@B@@@@@@@BA@@@@@@@@@B@@@@@@B@@@BAB@@@@@@@@B@DABB@@F@D@@@@BB@@B@@B@@BB@BBB@@@BBDBBB@@BB@B@DAD@B@B@B@@@@BBHDFBBBHDDBDD@@@B@D@BA@BB@@@BD@BBB@@@@@B@B@AB@@@B@@B@@B@@A@@@@@@@B@B@@B@@@BA@@@@BA@@BA@@BA@@@ABAD@B@@@@BB@@@@@BB@@BB@@@BAB@@@@@@@@@@@@B@BB@@@@@BB@@@@@@@A@@@@@@B@@A@@@@B@@@@@@@B@@@@@@B@B@B@B@B@BB@@@@@B@@AB@@B@@@B@@B@B@@@@@D@B@@@@@@B@@@@@B@@@@B@@@@@B@@AB@@@B@@@@@@B@@@@@B@@@BBBB@B@@@BB@@BB@@@@@@B@@@B@BA@B@@@@@@@@@@@B@A@BB@@@@A@A@@@@@@BB@@@B@@@@B@@A@@@@@@B@@@@@@B@@@B@@AB@@@@@B@@@B@B@@@@BB@@@@AB@@@@@@BBB@@@@@@B@@B@@@@@@@B@@@@@@@@@B@B@BABB@@B@@@B@@@A@@@@B@@B@@@BB@@@B@BB@@B@@B@@BB@@AB@@@@@@BA@@B@@BB@AB@@B@@@@@@B@@@@@@B@@B@@BBB@@BBA@@@B@@@@B@@@@@B@@@@@@AB@@@@@@B@B@@@A@@AB@@@@BB@@@@@@@@@B@@@@B@@@@FAB@D@@@@@BC@BBA@@@B@B@@@BB@@@@@@@@ABA@A@A@@@@B@@A@@AA@@AAA@@ACAAC@@@@BA@@DABA@@@AB@@@B@B@@A@@@@C@@@@@@@BABA@@@@@@B@@@@A@@A@@A@@B@@@BA@@@@A@@@D@@A@@@@B@AA@@B@@@@A@AA@@A@@@@@A@@@@@@@@A@@A@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@BA@@B@@@@@@@@AAA@@@B@@@@A@@@@@@AA@@@@@A@BAA@@AB@A@@A@@A@@AD@@@@@@A@@@@B@@A@@AB@@@A@@A@@@@A@@@@B@@@@@B@@@@@@B@@B@@A@@B@@@B@@@AA@@@A@@@@@@@A@@@@A@@B@@@AA@@@BA@@AA@@@@@@A@@A@@@@@@@AB@@@@B@@B@@@@@@A@@@@BB@@@@B@@@@A@@BAB@@@@@B@@@@@@@@@@BBA@@@@B@@@@B@@@@B@@@@B@@@@B@@@@@BAA@BAB@B@@@@@BA@@@@B@BAB@A@BBA@@@@@@@@@@@B@B@@A@@@B@@B@@@BA@@@@@A@@@@@ABA@@B@@@@@@AB@B@@@@@@@@A@@B@@@B@@@@@B@@A@@@A@@B@@A@@@A@@BAB@@@@@@@@A@@@@B@@ABA@@@B@@BA@@@@@A@A@@@@@@A@@AB@B@BA@B@AB@@@@A@@@A@@@@AAA@@@@AB@@@BA@@B@@@AA@@@A@@BA@AB@@@B@B@@@@@B@@@@@B@D@B@@@@@BA@A@@@A@@@A@@@A@@A@BABB@@@@@@@B@@BA@@@A@@A@@@@@@@@@@@A@@@@@@@A@@A@@@@B@@C@A@@BA@@A@@A@@@A@@@A@@@@BAB@@A@@AA@@@CBAB@DB@@B@D@B@B@BB@@@BB@@BB@@B@B@BBDDD@BBD@@AB@D@@B@@@@A@@@AB@@A@@BA@@@AB@@@@@B@@B@@B@@@BA@@B@BA@@B@@AB@B@@@@@@@B@@@@@B@@AB@BB@@@@@@B@@B@@BB@@B@B@@B@@BA@@@BB@B@@@BA@@BB@@@@B@@@@AB@@@@@@@@B@@@@@@B@@@@@B@@@@@@@BA@@BB@A@@@B@@B@BA@A@@B@@BB@B@@AD@B@@BB@@@B@@B@@B@@B@@@@@B@@BB@@@@@@@@A@@@@@B@@@@B@@@@@@B@@@@@AA@@B@@@B@@@@@@@@@@B@@A@@@@@B@@@@@@B@@@B@@CB@@@@B@@BB@BD@@@B@B@@@B@@A@@B@@BB@@@@@B@@A@@A@@@@@B@@@@@@@BA@@@@@@@B@@B@@@@A@A@@@AB@@A@@A@A@@@@AB@@@@A@@BBD@@@B@@@B@@@@@BA@@B@@AD@@@@@@@@@B@@@@@BA@@@@B@@@B@@BB@@@@BBA@@B@@B@@AB@@@@A@B@BB@@@@@@BB@@B@@@B@@A@@@@DBB@@@BA@@@@A@@A@@AA@@@@@A@@BA@B@BB@@AB@@@@CB@@@BA@@B@@BA@@BA@@@B@@@A@@B@@@@A@@B@@@@@B@@BA@AB@@A@@BB@@@B@B@@@BBABC@@AAA@@BD@@A@@A@@A@@A@@A@@B@@ABB@@B@@A@@@@@B@@@B@@BA@ABBBA@A@@B@@@B@@@B@@BB@B@@B@@@@@@D@BB@@@B@B@@BA@@@@B@@@B@BA@BD@@@@@@@@@@B@@@BA@@BA@@@@B@B@B@B@BB@@B@@@@@@B@@@@BA@@@@B@@@@@@@AB@@@@BAB@@@@B@@@BB@@@B@@B@@B@@B@B@BB@@B@@A@@@@A@A@@@@@BA@@@@B@@B@B@@@@B@AB@@@@@@B@@@@@BA@@@A@@@@DA@@@A@@B@@@@@B@@@@A@@@@@@@A@A@@A@@A@@@B@AA@@@@A@@B@@@@B@@BB@@B@@BB@@@@ABP@@JT@@F@@@D@@@BA@@@cAK@@DA@@@@@@A@@AB@A@@A@A@@A@@@@A@@AA@@AOA@BBDABC@@B@B@@@BABABBBDBBBB@BBBB@B@@@@BBBB@BB@@B@BADAD@BABABABAD@B@@@@@@CAECCCAAIG@@@BA@A@@B@@AB@@ADC@@@ABQ@@@@FMBC@@@^RDDB@DBJHBB@BBB@@B@BBB@@@BBBBBB@B@B@@BB@@@D@D@BBB@BEBEDC@@BCAE@A@@@AAC@AACCEAAAAAA@AA@@AAA@@@A@AA@@CEA@CA@@A@ABCBA@@BABCDB@BB@B@BCF@B@B@@DBB@BB@BA@@B@@AD@@ABCB@@C@@B@@@B@B@@@B@BA@A@A@@@@@A@@@@@A@@@@@@@@@@@@B@@BBBBB@B@@@@BB@BB@@@@@B@B@@@B@@A@@BA@AA@@AB@@B@@@B@@B@@@BABA@@B@BB@@@B@@B@@@@B@@@B@@B@@B@@B@@@B@@@@@B@B@@B@@@BB@@B@BBB@BB@@@@B@B@@@BBB@B@D@BB@@B@B@@@@B@@BB@A@@B@B@B@@@BB@@@B@@A@@BA@@@@B@@A@@@@@A@@@@@A@@B@A@@@BA@@@A@@@A@@@@BA@@@@@@BAA@@@@@AA@@B@@@@@A@A@@@AA@@B@@@@@B@@@@@BA@@@@@A@@@@B@@@B@@A@@A@@@@A@@B@@@@AA@@@@BA@@A@@@@B@@@@AB@@@@A@@@@@B@@@@@@BB@@B@@@@@B@@@@AB@B@@A@@@@@A@@@@@@@@@@@A@@@@@@@B@@@BB@@@@@B@@B@@B@B@@@@@B@@B@@BB@@AB@@B@B@@@@@B@B@@@@@@@@@@@@@BA@@@A@@@@B@@@@@@@@@@@@@@@B@BA@@@A@@@BB@@@B@@@@B@@B@@@@@B@@@@@BB@B@@@B@B@BB@@AB@A@@A@@@@B@@@@@@@@@@@BB@@@@@ABA@@BA@@@@@@@@@@B@@@@B@@B@@A@@BA@@@@@@@B@@@B@BA@@@@@B@@@@@@B@@@@@B@@@@B@@A@@B@@A@@@@BA@@@@@@@@@@BA@@@@@A@@@A@@@AA@@@@@B@@@@@@@@@B@@@@@B@@CB@@@@@BA@AB@@@@B@@@@@@B@B@@@@@@B@@@@@@@@@@@@B@@C@@@@@@@@@B@@@@@@BAB@@@@A@@@@@@@ABA@@@A@@@@@@@ABA@@B@@A@@B@@A@@A@@B@BA@@@@@ADABA@@A@@@A@@B@@AB@@@@A@@@@@@B@@AB@A@@@@@@ABA@@BA@@B@@@@@@@@@@@A@AAA@@A@@@@@@@@@@@@B@@@@@B@@@@@@@@@BA@A@C@@@@@@B@B@B@BAB@B@@AB@BAB@BAB@@ABABA@C@@B@@AB@B@@@BAB@B@@BB@@@B@BAB@@@@@B@B@@@B@@@B@@A@@BBB@@@B@BB@@B@B@@@@ABA@@@@@AB@BAB@@@B@@AB@@A@A@AB@@@BAB@@@@@BABA@@@AB@@AB@BA@@B@@AB@@@@@BB@@B@@BBBB@B@@@B@@BB@BBB@B@@@@@B@B@B@@@B@@@@BB@B@@@B@B@@A@@@AA@@@@@ACA@@@AAAA@AAA@A@A@A@A@A@AA@@@@A@@BAB@@AB@@@@@B@B@D@@B@@B@@AB@B@@BB@B@B@B@D@@AB@B@B@@@@@@BBBB@@B@@@B@@DA@@B@@ABA@@@ABABA@@@@B@@@BB@@@BB@BBBBBBB@B@@A@@B@@@BBB@@@BBB@@@B@@CB@@CA@@A@CB@ACAAA@@@A@@EBABAD@AA@CC@@AB@@@@E@A@@@AB@AA@@AA@@@BA@@AA@@@A@@A@@BAB@B@@AB@@@B@@A@@B@@BB@@@BA@A@ABCB@BABA@AA@@@@@@@@@AA@AAA@@@CA@@@@A@@@A@@@CBC@@@@@ABA@A@@@C@A@A@@@ABC@@BA@@@@BABA@AB@@AB@@@@@@A@A@A@A@A@C@@B@@A@@BAD@@AB@@@B@B@@AB@@BB@@A@@BAB@@AB@@@BCBA@@B@@@B@BB@@B@B@@@BB@@@@BA@@B@@A@@@@BA@@B@@@@B@@BDBB@@B@BB@@BD@BB@@D@B@@B@@@@BB@BB@@B@@@B@@@B@@B@@@@@ABAB@@@B@@@B@B@@@@@B@B@B@@B@ABBB@B@@A@ABA@@BA@@@@BABA@@@@B@@@BBBBB@B@@@B@D@@@B@@B@@@BB@@BBBB@@@@B@B@BAD@@@B@@BB@@@B@B@B@@@BBB@@BA@@@@BD@@@BB@B@@@B@B@@B@@@B@@@B@@@@@@BB@BD@B@B@@AD@@B@@B@@BBB@B@@@@@B@@@F@@@BBB@@@BB@@BB@BB@B@@@@BB@@@B@BDDB@@BB@@B@BB@@B@@@B@B@@@BB@@B@@BBB@@@@@BB@@@B@B@B@@BB@@@@@B@BABAD@BA@@B@@BB@@@B@@BB@@@BB@B@B@@@B@B@@BB@B@@@B@@@@B@@@B@B@BBB@@@DD@@B@@@B@@@@@@@BB@@@B@@BD@@B@@@@BB@@BB@@BB@B@@@B@B@@@@@B@@@@@B@B@BBB@@@B@@@@B@B@@@B@@B@@@@@@@BB@@@@B@@@@@@BBB@B@@@@@B@@@B@@@@B@@B@@@BBB@@@B@@B@@B@@BB@@@BB@@@BB@@@@B@@@@B@@@@BB@@@@B@@B@@B@@B@@@@@B@@B@@@D@@B@B@@@@B@@@BB@@BB@@B@@BB@B@B@@@BBB@@@@@@@@@B@@@@AB@@@@@B@@@B@@@B@@A@@@@B@BABAB@@@@BBABB@A@B@@B@B@B@@@@B@@@@@B@BB@@DBB@@@@@B@@@@B@@@B@@@B@B@BB@@B@BB@@B@@@B@@@BC@@@@BAB@@A@AB@@A@@BCB@B@B@B@@@BA@@BAB@@A@AB@@@BA@AB@@@DA@@B@@@B@@A@@BA@@BAB@BA@ABABA@@DCBB@ADB@@B@B@@@@AB@B@@@BAB@@@@@BAB@@@@ABBB@@@B@@BBA@@BC@@@@B@BCBAB@@A@AB@B@@@B@BA@@B@@@BABB@@DA@@AA@@B@BA@@B@B@@@BBB@B@@@@@@A@@DA@A@@@A@@A@@@AA@@AA@@AAAAA@@A@A@AA@@@AB@AA@@AA@@@@@@BA@@@@AB@@@@@@@C@@@@A@A@@A@@A@@AA@@@@BB@@@@@@B@@@@@@AA@@A@AAAB@@@@@DB@@A@@B@@B@@BB@B@AA@@BA@@@@@A@@@@B@@@@@@A@@@A@@@@BA@@@@@AB@@@@A@A@A@ABA@@BA@@AC@@@@B@B@B@B@@BB@B@@@B@@ABA@ABAB@@@B@B@BA@A@@B@@@B@B@BA@@BAA@@@B@@@@@A@@A@@@@AA@@@@BBB@@@@AB@BB@@BB@@B@@@@@A@@A@@@@@AB@@@@@@A@@@BB@@@A@@@B@@B@@@@@@B@@@@CBA@A@@BA@A@@@A@A@@BA@@@AB@@A@@BA@@@A@@@A@@@A@@@@@A@@@@@@@A@@AA@@@@A@AA@@@@AA@@@@@@@A@@@A@@@@BA@A@@B@@A@@A@@A@@@A@@BA@@@@@@@A@CAA@AA@@A@@DA@B@@@@@@B@@@@@BA@@@A@@AA@@AA@@@AAAB@@BDB@@@@BA@B@@B@@B@@@@B@@@@@@A@@A@@A@@@@@A@@@@@@A@@A@@@@BAB@@BB@@A@@@A@@B@@@@@@BB@@@@A@@B@@A@@@@B@@@@@B@B@@BB@@A@AB@@A@@@@@A@A@@BABAB@B@@@@@@@AA@A@@@A@@@@B@@D@@BB@@@@@A@A@ABB@@@@D@@@B@@B@@@@B@@@@@BB@@B@@BB@@@@@B@B@D@@BB@B@B@B@@BBA@@@BB@@@B@B@@B@@B@B@@B@@@B@BB@@@@B@@@BB@@@@BB@@@B@@AB@BA@BD@B@D@B@@@B@@@B@@@@@@@BBB@@@@@@@B@@BB@@@B@@@B@@@AA@@@@@A@@@ABAAABA@@@@@A@@@@@@AA@@@ABA@A@@@@@A@@B@@@BA@@@@A@@@A@A@A@@A@@BAB@@@@@BA@A@@@@@A@@BA@@BA@@@@@BB@B@B@@AB@@@@CBA@@@AAABABA@@BABAD@AA@@@@@@@AA@@@BA@@A@@A@@@@@@@AB@@@A@@@A@A@A@@@A@BAAA@A@@@@BA@@@A@@@@@@@@BA@@@@@@BDBA@@B@@B@@B@@@@@@@@A@@@AA@@A@A@AA@A@@A@A@@@@@A@@BA@@AA@@@@A@@B@@@@@B@@AC@@A@@AA@A@@@A@@@A@@@@A@@B@@AB@@@DABCBABA@@@A@@@@B@@@B@@A@A@@@A@@@@BA@@B@BAB@B@AA@A@AB@@A@@@@B@@AB@BA@@@@BB@@@@BA@@B@B@@BB@@@@@B@@@@BB@@@B@BA@@DB@@@AB@@@@B@@@@@@@A@@@@@A@@@@B@@@A@B@AA@@@@B@@@@@B@@@@@B@@@@@@@@@@@@AB@@@@A@@@@@@@@@A@@@A@@B@@A@A@@@ABAA@@@@@@@@@@@BAA@@@@A@@@@@@AA@@@@@@@@@@@@@@@@@@AA@@@@AA@@@A@@A@@A@@AAA@@AA@A@A@@B@AA@@@AA@@@@@AAA@@BA@A@@@A@AA@B@BA@@@@@@A@@@@AB@@@BA@ABA@@BA@@@@BA@@@A@A@@BA@A@@@@B@@A@@@@@@B@@A@@B@@@@@@@A@@@@@B@@A@@@@@B@@B@@@@A@@@@@@@AB@@A@@@A@@@BBA@@@@@@B@@@@@B@B@@AA@@@B@@@@@@AA@@@A@@@@C@@A@@@@@@@BA@@@A@@@ABB@ABA@A@@@A@@@@B@@@BA@@@@@@@@B@@@@D@@@@B@@@B@@@B@@@@@AA@@BB@@@@B@A@@@B@@A@@@@@@@C@@B@@A@@@@B@@@@@@@@@B@@@@A@AB@@A@@@AA@@BAA@@@@@@B@@@@@@A@@A@@@@@@@@@A@@A@A@@A@@A@@@@@@A@@@@@ABA@B@@A@@@@CB@@@@@@@@@AB@@AB@A@@@A@A@@@B@@@A@@@@@@A@@@@A@@@@@B@@@A@@A@@@@@@A@A@@@A@@@@@B@@@BAB@@@BA@BB@@A@@@@@@@@D@@AB@@@@AA@@ACA@@A@@@@@@B@@@@@@@@@A@@C@@@A@@@@@@@A@@@@@@@@@AB@@@@AB@A@@@@AA@@@@@@C@A@@@A@@@@@@A@@@A@@@@@@AAA@@BA@@A@A@@@@@AA@@@A@@@@@A@@C@A@@@@A@@@AA@@A@@@@AAB@@A@@@@A@@@@AB@A@@A@@BA@B@@B@@@@@@@@@BA@@@B@@@B@@@B@@@@@B@@@ABB@@@B@@@@@@@B@@@B@@@@@AA@@@@@@B@@@@@@B@@BB@@C@@B@@@B@@@@@@AAA@@DCA@B@B@B@@B@BAB@@B@@A@@@@@@@A@@B@@A@@@@B@@D@B@@@@AB@@B@@@@@@@B@@@BAAA@@BA@@@@AB@@@@@@@@AB@@@C@CBA@C@@@@@@@@@@A@@@@@A@@@A@@@A@@@@B@@@AA@A@@@@@@@@A@@@@@@A@@AA@@@BABB@C@@A@@@A@B@@@D@B@BA@@A@@@@@@@AA@@@@@@@@@BA@@@@@@@A@AB@@@B@@AA@@@@@@@@@B@BA@@@@A@@@BA@@@@@@@AB@@AAAB@@@BA@@@@@@B@B@@@@AA@@A@@@A@@A@@@@@@A@@@@@@AA@B@AA@@@@@@AA@@@@AA@@@@B@B@@AA@@@@@A@@@@A@@@AB@@B@A@@@@D@B@@@B@@@@@B@@A@@BBBBB@B@@@@AA@@AAAA@@A@@@@@@A@@@@@@B@@@@A@A@@@ABC@@A@@@@@@@@@@AB@@@@A@@@@@AA@AB@@C@@B@@A@@@@@@@@@@A@@A@@@AB@@@@CB@@A@@@@@@ADA@@@A@@@@@@@@B@@@B@@@@@@AA@@@@A@BB@B@@BD@@@@AAAB@@BB@@@@@B@@A@@@AA@@ABB@@@@@BB@@@@@@BB@@@BB@@@@AA@@@@B@B@@B@@@@BA@@@B@@@@@@BB@@@B@@@@@A@@@@B@@@@@@@AA@@@@B@@B@A@@@@@AA@@@AA@@A@@@BA@@@AA@B@A@@@@@A@@@@AB@@@A@@@AA@@@@BA@@@B@@@@BB@@@A@@@@@@A@@A@@@@@A@@A@A@@@@@@@@@@@B@@@@@@@@@@@@@BA@A@BAA@B@@@@A@@@A@@A@@A@@@A@@@A@@@@@@B@@@@A@@A@@@@AB@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@A@BBA@@@@@@@@@A@@@@@@A@@AA@@A@@@A@BAA@@@@@@@A@@@@@@@A@BA@@A@@B@@@A@@@@@AB@@@B@@@@@A@@ABB@@@@B@@@BA@@@@@AB@@@@@@A@@A@@@@@@@B@@AAAB@@@A@@A@@@ABA@@B@@@@@@@@AA@AB@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@BA@@B@@@D@@@B@@@@@@A@@@A@@@@@@@@@@BAB@D@@@@A@@A@A@A@A@@B@@@A@@@BA@@@@@AA@@AB@@A@@AA@CD@@@B@@@@@BC@@@@@@@A@@@@BB@@@A@@B@@B@@@@@B@@@AB@@BB@@@@@@@B@@@D@@@@@CAB@@AB@A@BB@@B@@@@@AA@@@@@@B@B@@@@@@@@@@AA@@@@@DAAC@A@@@A@AB@@@@@B@@@@B@@@@@BA@@BBBB@@B@@BA@@@@@A@A@@@BB@@A@@@@@B@@BB@@@@@@@@BB@@A@@@@@@@A@@@B@@B@@@@AB@@BAB@@@@@B@@@@@@@@@@@BA@@@@@BBB@@@@@BBB@B@BB@@@@B@@@@A@@AA@@BB@@@@B@@@B@@B@@AB@A@@AB@@@@@B@@@@@@@@@AA@@@A@@B@@A@@B@@A@AE@BG@@BA@@B@@A@@@A@@H@B@F@DB@@@C@A@@@CA@@A@CB@AABA@BBA@@AAB@@@BA@@@@B@@@@@@@@@@@AAA@@A@@@@@A@A@AAA@@@BB@@@@A@@B@@@B@@@B@B@BA@@B@B@@C@@BA@@@@@A@@@A@@@@BA@@@@BB@@B@@@B@BA@@@@B@@B@@@@BA@@@@@@@@B@@@@@B@@@B@D@@@@@@A@@AC@@@@DA@@B@@@D@@ABB@@@@@A@@@AAA@@@AB@B@@@@AA@@@@@BA@@@A@@@AC@@B@@@@@FC@@A@A@AA@@A@@B@A@@AA@@@A@@@@A@@B@@@@A@@@A@B@@@A@@@@B@@B@@A@B@@@@BD@@@@CBA@@B@@@@A@A@@@@AB@A@@@@A@BC@@BA@@@@@AA@@@A@@@@@B@@@@A@@@@@A@@@A@@@@AAA@@@@BAB@B@@AD@@B@AB@@AA@B@@B@@BAA@B@BA@@@@@A@@A@@@B@@A@@B@@@AA@A@@@@@@@@@A@A@CA@@@@@@@B@@A@@@A@@@@@@@A@@@BA@@@@AA@@@@A@@@@B@@A@@@BC@@B@@@AA@@AB@A@@@@@@@AA@@@A@@@@@@@@@@A@@@@AA@@@@AB@@@AAB@A@@@@@AB@@ABAB@@@@A@BBA@@@@@@A@@A@@A@BAA@@AA@AAA@@@@@@@@@@@@@@@A@@@@@@BA@@@@@A@@B@@ABAB@@@@A@@@@@C@@@@@B@@@@A@@@@@@@@B@@@@@BAB@BA@@@@@AA@@@AB@BA@@@@@@@@@@AB@@@A@@@A@@B@@@@@@@A@@@@@@B@@@BA@@@A@@CB@@@@@@BA@@@A@@@A@@@@@A@@@@@A@A@BB@B@@AA@@@@A@@@@B@@@@@B@@@@A@@@A@A@AB@@@@A@@@@@AB@@@@@B@@@@@@@B@@@@@@@B@@@@@@A@@B@@@@@@B@@@@@@B@@AB@@@BA@B@A@@@@@@B@BA@@@@@@B@@B@@@B@@B@@@BB@@@A@@B@BA@@@@BA@@@@BA@A@A@AAA@@B@AA@A@@@@@A@A@A@@B@@BB@@B@@JB@@@@@@B@@@@A@@@B@ABC@@A@@@@@@A@@@A@@@@BAB@B@@@@@@@A@@@A@A@@@@@@AA@B@@@B@BA@BB@@@@@@@AAB@@@A@@@@@@@A@A@@@@@@@@@@@AB@A@A@@@ABB@@BA@@@B@@@@@@B@AA@@@@@@@@B@@BB@@A@@BB@@@B@@@@@@@B@@@B@A@@@A@@@@BB@@B@A@@A@@@@@@B@@@B@@B@@@@ABAB@@@A@@@@@@@@@B@@@@A@@@B@@B@@AB@@@BB@@A@@@A@A@@B@@@@@@AB@@A@@@AB@BC@@B@@@@B@@B@@@@@BA@A@ABA@@B@B@BABA@@@@B@@@@@BAB@@A@A@@@@B@@A@@B@@@@AD@@@@A@AA@@@AC@@@AAA@@B@@@B@@@B@@@B@@A@@BA@@AA@A@@AA@@AA@AAA@@@@@AA@BA@AB@A@A@AA@@A@@@AAA@DA@A@@A@@A@A@@@A@@@@AA@@AAA@@@AA@A@@@@B@@AB@@AAAA@@@@@DA@@D@@ABA@@D@B@@@@AB@@A@@@A@@A@BA@@ACA@@@B@AA@E@@@@@AA@@@@A@A@@BA@AA@@A@@@AB@@A@@@AB@AAB@B@AA@@B@@A@@@A@A@A@A@@AA@@A@@@@@AAACA@ACA@A@A@@@AAAA@A@@@@@ABA@A@@@A@@@A@@@@A@@A@@@A@@@@BA@AA@@A@@@A@A@@B@BAB@@AB@AA@@@AAA@@@@@@@A@A@@AA@@@A@@@@@A@@@AA@@@@C@@@A@@@A@@@AA@@AA@@AA@@@AA@@@AA@AA@@@@@A@@@A@@@A@@BA@A@@@A@@BAA@@A@@@CBA@AA@@@AAA@@@AAA@@@A@A@C@@@@AA@@@@@A@AA@A@A@AA@@@AAA@@A@@AA@AA@@A@@@@A@@@AA@@CA@@A@@@AB@@CA@@AA@@@@A@@@@@AAA@A@@@@@A@@A@@AA@@A@@AA@AA@@A@BA@@AA@@@A@@@A@@@AB@@A@@@A@@@@@A@@B@@A@@@A@@@CA@@@@ABA@@@@@A@A@@@A@A@@@CA@DABA@@B@@@BA@@BAB@@A@@@A@@B@@@B@@@@A@@BABA@@BA@A@CBA@@BC@@@@AAAA@A@@@AA@@AB@@A@@@AA@@A@A@@AA@AA@@@@@A@AAA@AA@ABAAA@@@@@A@@@A@@A@@@A@@AAAA@ABA@@@@AAA@@@AA@@A@@@@@A@@AC@@@A@A@@BA@ABA@@AA@@@@@A@A@@@A@@@@@@CC@@AAA@@A@AA@@@A@@@@@@AA@@@C@@B@@A@@AA@@@@@@@@A@@@A@@@@@AAA@@@A@@C@@@A@@@A@AAA@@AB@BA@@A@@AA@@A@@@A@@@AA@@A@@@A@@@A@@@@AAA@AAA@A@@@CC@@AAA@AB@@A@@@@@A@C@A@@@@@@@A@A@@@@@@AA@@@@@AAA@@BA@@@@A@@@@@A@@@@@AAAA@AAA@@@@@@@AA@@A@@@A@@A@@AA@@A@@A@@AA@@@A@@@A@A@@A@@@AA@@B@@A@@@@A@A@CAA@B@CC@@@BA@AAAA@@@A@@A@@AAAAB@A@CAAACA@@AA@@@A@@@A@@@A@@@@AA@@AA@@AA@@@AA@@@A@AAA@A@@A@@@@@@AACA@@A@AA@@@@@A@@@@A@@@A@AA@@AAA@@A@A@@@AA@@A@@@@A@@A@@@@A@@A@@A@@AA@@@@AA@A@@A@@A@@AA@@A@@@AAAA@@@A@@@@AAA@AA@A@@@AAAA@@@AAA@@A@@AA@A@@AA@@@@@@AB@DA@ABA@@@@BA@@@@B@@A@@@A@A@@@AB@@@@@AA@@@@AA@@@AA@@A@@@A@@@AAAA@@A@AB@@A@@BC@@@A@AAA@AA@@@@AA@@A@@@AAA@A@AA@@A@@AA@@@@@@A@@AA@@@@AAAAAA@A@@A@@@@A@@@A@@@@AAB@@A@@BA@@@@@A@@BA@A@@@A@@@@@A@AAA@@@@A@@A@@A@@A@@AA@@AAA@@AA@@AAAAAA@AA@@A@@ABA@AB@@A@A@@@A@A@A@@@A@A@CB@@@@AAA@AA@AAA@A@A@A@A@@AA@@AB@@A@@@@BA@@@@@AAAA@@A@A@A@A@@@AB@@@AA@@@@@A@@@@BAA@@@BA@@@@@@AA@@@@@A@A@@@ABA@@@A@@AA@@@@@AA@@@A@@@@AA@@A@@D@B@@A@@B@BADA@@BABA@@@AAA@@AA@A@@@@@A@AAA@AA@@AA@@@AACAA@@AA@@AAC@@@A@@@AB@AA@@A@@A@A@@A@A@@A@@@A@@@A@AAA@@AAA@@AA@@@@@A@@@@@AAA@@@C@@@AA@@AA@@@@A@@@"],"encodeOffsets":[[121744,29225]]}}],"UTF8Encoding":true});}));