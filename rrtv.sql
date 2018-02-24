set names utf8;
DROP database if exists rrtv;
create database rrtv;
use rrtv;
DROP TABLE if exists rr_video;
create TABLE rr_video(
    vid int(16) primary key auto_increment,
    title varchar(64) default null,
    vtype varchar(2) default null,
    vlength bigint default null,
    vintroduce varchar(512) default null,
    vlike int(64) default 0,
    preview varchar(256) default null,
    href varchar(128) default null
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;;
insert into rr_video values('   1   ',' 示例视频1   ',' 1   ',' 1234 ','示例视频,好好学习天天向上,学习期间不搞对象',' 1   ',' a54e659d4e5ea3ecc0d4b0241e6b64eb.jpg    ',' video.html?vid=1    ');
insert into rr_video values('   2   ',' 示例视频2   ',' 2   ',' 2134','示例视频,好好学习天天向上,学习期间不搞对象',' 2   ',' b_1503991856135.png ',' video.html?vid=2    ');
insert into rr_video values('   3   ',' 示例视频3   ',' 3   ',' 1234','示例视频,好好学习天天向上,学习期间不搞对象',' 3   ',' b_1511848857800.jpg ',' video.html?vid=3    ');
insert into rr_video values('   4   ',' 示例视频4   ',' 4   ',' 12342134','示例视频,好好学习天天向上,学习期间不搞对象',' 123 ',' b_1511862038145.png ',' video.html?vid=4    ');
insert into rr_video values('   5   ',' 示例视频5   ',' 1   ',' 1234','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 123 ',' b_1511881427602.png ',' video.html?vid=5    ');
insert into rr_video values('   6   ',' 示例视频6   ',' 2   ',' 12342134 ','示例视频,好好学习天天向上,学习期间不搞对象  ',' 312 ',' b_1511921464876.jpg ',' video.html?vid=6    ');
insert into rr_video values('   7   ',' 示例视频7   ',' 3   ',' 2134 ','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 3214    ',' b_1511946877591.jpg ',' video.html?vid=7    ');
insert into rr_video values('   8   ',' 示例视频8   ',' 4   ',' 1234 ','   示例视频,好好学习天天向上,学习期间不搞对象  ',' 12  ',' b_1511955166183.jpg ',' video.html?vid=8    ');
insert into rr_video values('   9   ',' 示例视频9   ',' 1   ','1234 ','   示例视频,好好学习天天向上,学习期间不搞对象  ',' 312 ',' b_1511958035693.jpg ',' video.html?vid=9    ');
insert into rr_video values('   10  ',' 示例视频10  ',' 2   ',' 1234','   示例视频,好好学习天天向上,学习期间不搞对象  ',' 0   ',' b_1511959944633.jpg ',' video.html?vid=10   ');
insert into rr_video values('   11  ',' 示例视频11  ',' 3   ',' 1234 ','   示例视频,好好学习天天向上,学习期间不搞对象  ',' 1234    ',' b_1511968536470.png ',' video.html?vid=11   ');
insert into rr_video values('   12  ',' 示例视频12  ',' 4   ','1234','   示例视频,好好学习天天向上,学习期间不搞对象  ',' 456 ',' b_1512007642015.jpg ',' video.html?vid=12   ');
insert into rr_video values('   13  ',' 示例视频13  ',' 1   ',' 1234','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 346 ',' b_1512012309911.png ',' video.html?vid=13   ');
insert into rr_video values('   14  ',' 示例视频14  ',' 2   ','1234234 ','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 45645   ',' b_1512013643457.png ',' video.html?vid=14   ');
insert into rr_video values('   15  ',' 示例视频15  ',' 3   ',' 1234','   示例视频,好好学习天天向上,学习期间不搞对象  ',' 0   ',' b_1512014925858.png ',' video.html?vid=15   ');
insert into rr_video values('   16  ',' 示例视频16  ',' 4   ','1234','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 45  ',' b_1512064020301.jpg ',' video.html?vid=16   ');
insert into rr_video values('   17  ',' 示例视频17  ',' 1   ','2134','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 5   ',' b_1512091444998.png ',' video.html?vid=17   ');
insert into rr_video values('   18  ',' 示例视频18  ',' 2   ','1234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 5   ',' b_1512122014279.jpg ',' video.html?vid=18   ');
insert into rr_video values('   19  ',' 示例视频19  ',' 3   ','1234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 5   ',' b_1512122023448.png ',' video.html?vid=19   ');
insert into rr_video values('   20  ',' 示例视频20  ',' 4   ','2134',' 示例视频,好好学习天天向上,学习期间不搞对象  ',' 544 ',' b_1512123150834.png ',' video.html?vid=20   ');
insert into rr_video values('   21  ',' 示例视频21  ',' 1   ','2341234',' 示例视频,好好学习天天向上,学习期间不搞对象   ',' 4   ',' b_1512123391252.jpg ',' video.html?vid=21   ');
insert into rr_video values('   22  ',' 示例视频22  ',' 2   ','1234',' 示例视频,好好学习天天向上,学习期间不搞对象  ',' 2314    ',' b_1512124321694.jpg ',' video.html?vid=22   ');
insert into rr_video values('   23  ',' 示例视频23  ',' 3   ','12343','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 4   ',' c24124334242628e0d10edcb8adfed68.jpg    ',' video.html?vid=23   ');
insert into rr_video values('   24  ',' 示例视频24  ',' 4   ','3423','   示例视频,好好学习天天向上,学习期间不搞对象 ',' 4   ',' b_1512184489569.jpg ',' video.html?vid=24   ');
insert into rr_video values('   25  ',' 示例视频25  ',' 1   ','234324','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 4   ',' b_1512172297935.jpg ',' video.html?vid=25   ');
insert into rr_video values('   26  ',' 示例视频26  ',' 1   ','234234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 4   ',' b_1512145062000.jpg ',' video.html?vid=26   ');
insert into rr_video values('   27  ',' 示例视频27  ',' 1   ','234234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 1234    ',' b_1512095251732.jpg ',' video.html?vid=27   ');
insert into rr_video values('   28  ',' 示例视频28  ',' 1   ','234234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 34  ',' b_1512093785219.png ',' video.html?vid=28   ');
insert into rr_video values('   29  ',' 示例视频29  ',' 3   ','1234234','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 22  ',' b_1512022404301.jpg ',' video.html?vid=29   ');
insert into rr_video values('   30  ',' 示例视频30  ',' 1   ','234223',' 示例视频,好好学习天天向上,学习期间不搞对象   ',' 234 ',' b_1512016430777.png ',' video.html?vid=30   ');
insert into rr_video values('   31  ',' 示例视频31  ',' 4   ','234234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 234 ',' b_1512014055110.png ',' video.html?vid=31   ');
insert into rr_video values('   32  ',' 示例视频32  ',' 1   ','21342','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 4234    ',' b_1512008137985.jpg ',' video.html?vid=32   ');
insert into rr_video values('   33  ',' 示例视频33  ',' 5   ','234443','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 4   ',' b_1512007626785.png ',' video.html?vid=33   ');
insert into rr_video values('   34  ',' 示例视频34  ',' 1   ','234234',' 示例视频,好好学习天天向上,学习期间不搞对象  ',' 234234  ',' b_1511689609875.jpg ',' video.html?vid=34   ');
insert into rr_video values('   35  ',' 示例视频35  ',' 1   ','234234','  示例视频,好好学习天天向上,学习期间不搞对象   ',' 1234    ',' b_1511494249459.png ',' video.html?vid=35   ');
insert into rr_video values('   36  ',' 示例视频36  ',' 3   ','2342342',' 示例视频,好好学习天天向上,学习期间不搞对象   ',' 4   ',' b_1511493272605.png ',' video.html?vid=36   ');
insert into rr_video values('   37  ',' 示例视频37  ',' 1   ','1234',' 示例视频,好好学习天天向上,学习期间不搞对象  ',' 234 ',' b_1511433061317.png ',' video.html?vid=37   ');
insert into rr_video values('   38  ',' 示例视频38  ',' 1   ','234234',' 示例视频,好好学习天天向上,学习期间不搞对象   ',' 4234    ',' b_1511359219378.png ',' video.html?vid=38   ');
insert into rr_video values('   39  ',' 示例视频39  ',' 1   ','234234','  示例视频,好好学习天天向上,学习期间不搞对象  ',' 4   ',' b_1511347947919.jpg ',' video.html?vid=39   ');
insert into rr_video values('   40  ',' 示例视频40  ',' 1   ','234234',' 示例视频,好好学习天天向上,学习期间不搞对象  ',' 1234    ',' b_1505197123349.jpg ',' video.html?vid=40   ');
insert into rr_video values('   41  ',' 示例视频41  ',' 1   ','234234','示例视频,好好学习天天向上,学习期间不搞对象  ',' 234 ',' b_1503286384185.png ',' video.html?vid=41   ');
insert into rr_video values('   42  ',' 示例视频42  ',' 1   ','23423',' 示例视频,好好学习天天向上,学习期间不搞对象  ',' 234 ',' b_8715084259.png    ',' video.html?vid=42   ');
insert into rr_video values('   43  ',' 示例视频43  ',' 1   ','2344','示例视频,好好学习天天向上,学习期间不搞对象  ',' 345 ',' b_8279754556.png    ',' video.html?vid=43   ');

DROP TABLE if exists rr_user;
create TABLE rr_user(
    uid int(16) primary key auto_increment,
    uname varchar(64) not null,
    upwd varchar(12) not null,
    name varchar(12) default null,
    age int(4) default null,
    gender varchar(4) default null,
    href varchar(128) default null
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;	
insert into rr_user values('1','dsa','123456','氨溴索	','	21	','	1','user.html?uid=1	');
insert into rr_user values('2','das','123456','阿萨德	','	22	','	0','user.html?uid=2	');
insert into rr_user values('3','yqyq','123456','看到','	23	','	1','	user.html?uid=3	');
insert into rr_user values('4','zxz','123456','	dsfgdf二	','	24	','	1','	user.html?uid=4	');
insert into rr_user values('5','sdfasd','	123456	','	一人	','	25	','	1','	user.html?uid=5	');
insert into rr_user values('6','sadf','123456','	欧尼	','	26	','	1','	user.html?uid=6	');
insert into rr_user values('7','asdf','123456','儿童	','	27	','	1	','	user.html?uid=7	');
insert into rr_user values('8','1sa	','	123456','	sdrwqe	','	28	','	1','	user.html?uid=8	');
insert into rr_user values('9','12312','123456','wer	','	29	','	1','	user.html?uid=9	');
insert into rr_user values('10','cvb','123456','sadaf	','	30	','	1','	user.html?uid=10');
insert into rr_user values('11','dfg','123456','电风扇ds	','	31	','	1','	user.html?uid=11');
insert into rr_user values('12','fg','123456','第三方地方	','	32	','	0','	user.html?uid=12');
insert into rr_user values('13','vb','123456','	水电费人	','	33	','	0','	user.html?uid=13');
insert into rr_user values('14','jksdaf','123456','	而提供给	','	34	','	0','	user.html?uid=14');
insert into rr_user values('15','jksdaf','123456','	发过火	','	35	','	0	','	user.html?uid=15');
insert into rr_user values('16','dfgew','123456','	发过火他	','	36	','	0','	user.html?uid=16');
insert into rr_user values('17','qeweqr','123456','	324324	','	37	','	0','	user.html?uid=17');
insert into rr_user values('18','jksdaf','123456','1234死法	','	38	','	0','	user.html?uid=18');
insert into rr_user values('19','gdfg','	123456','	13241243	','	39','	0	','	user.html?uid=19');
insert into rr_user values('20','433edre','	123456','	二七区二	','	4	','	0	','	user.html?uid=20');
insert into rr_user values('21','zcv','123456','去玩儿','	41	','	0	','	user.html?uid=21');
insert into rr_user values('22','tre','	123456','	戊二醛','	42	','	0','	user.html?uid=22');
insert into rr_user values('23','trt34','123456','	去玩儿4345	','	43	','	0','	user.html?uid=23');


DROP TABLE if exists rr_like;
create TABLE rr_like(
    1id int(16) primary key auto_increment,
    luid int(16) ,
    lvid int(16) 
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
insert into rr_like values('	1','1','1');
insert into rr_like values('	2','2','2');
insert into rr_like values('	3','3','3');
insert into rr_like values('	4','4','4');
insert into rr_like values('	5','6','12');
insert into rr_like values('	6','8','13');
insert into rr_like values('	7','2','14');
insert into rr_like values('	8','2','15');
insert into rr_like values('	9','2','16');
insert into rr_like values('	10','2','17');
insert into rr_like values('	11','21','18');
insert into rr_like values('	12','13','19');
insert into rr_like values('	13','4','20');
insert into rr_like values('	14','1','21');
insert into rr_like values('	15','2','22');
insert into rr_like values('	16','3','23');
insert into rr_like values('	17','4','24');
insert into rr_like values('	18','4','25');
insert into rr_like values('	19','5','26');
insert into rr_like values('	20','1','13');
insert into rr_like values('	21','1','11');
insert into rr_like values('	22','1','21');
insert into rr_like values('	23','1','20');

DROP TABLE if exists rr_playlist;
create TABLE rr_playlist(
    pid int(16) primary key auto_increment,
    uid int(16) ,
    vid int(16) 
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;;
insert into rr_playlist values('1','1','1');
insert into rr_playlist values('2','1','2');
insert into rr_playlist values('3','2','3');
insert into rr_playlist values('4','2','4');
insert into rr_playlist values('5','3','5');
insert into rr_playlist values('6','3','6');
insert into rr_playlist values('7','1','7');
insert into rr_playlist values('8','1','8');
insert into rr_playlist values('9','1','9');
insert into rr_playlist values('10','4','10');
insert into rr_playlist values('11','5','11');
insert into rr_playlist values('12','21','12');
insert into rr_playlist values('13','6','13');
insert into rr_playlist values('14','12','14');
insert into rr_playlist values('15','1','15');
insert into rr_playlist values('16','2','16');
insert into rr_playlist values('17','3','17');
insert into rr_playlist values('18','4','18');
insert into rr_playlist values('19','5','19');
insert into rr_playlist values('20','6','20');
insert into rr_playlist values('21','7','21');
insert into rr_playlist values('22','8','22');
insert into rr_playlist values('23','7','23');

DROP TABLE if exists rr_comment;
create TABLE rr_comment(
    cid int(16) primary key auto_increment,
    pushid int(16) not null,
	 onvid int(16) not null,
    content varchar(512)not null,
    pushtime bigint default null
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;	
insert into rr_comment values('1','1','1','好好学习天天向上','123123');
insert into rr_comment values('2','	1','1','好好学习天天向上','12311123');
insert into rr_comment values('3','	6','1','好好学习天天向上','123111123');
insert into rr_comment values('4','	5','1','好好学习天天向上','123101123');
insert into rr_comment values('5','	3','1','好好学习天天向上','123110123');
insert into rr_comment values('6','	4','1','好好学习天天向上','123112123');
insert into rr_comment values('7','1','1','好好学习天天向上','1233123');
insert into rr_comment values('8','	1','1','好好学习天天向上','12311123');
insert into rr_comment values('9','	6','1','好好学习天天向上','123114123');
insert into rr_comment values('10','5','1','好好学习天天向上','12311523');
insert into rr_comment values('11','3','1','好好学习天天向上','123111823');
insert into rr_comment values('12','4','1','好好学习天天向上','123116123');
insert into rr_comment values('13','1','1','好好学习天天向上','12351123');
insert into rr_comment values('14','1','1','好好学习天天向上','123111923');
insert into rr_comment values('15','6','1','好好学习天天向上','123111723');
insert into rr_comment values('16','5','1','好好学习天天向上','123118123');
insert into rr_comment values('17','3','1','好好学习天天向上','123115123');
insert into rr_comment values('18','4','1','好好学习天天向上','123116123');






