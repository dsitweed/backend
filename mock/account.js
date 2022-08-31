import bcrypt from "bcrypt";
import { BCRYPT_SALT } from "../src/constants/env.js";

export const users = [
  {
    username: "mgaiter0",
    fullName: "Micky Gaiter",
    phone: "137-486-8294",
    address: "63202 Continental Terrace",
    dateOfBirth: new Date("4/24/2003"),
    email: "mgaiter0@facebook.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "lhiley1",
    fullName: "Latia Hiley",
    phone: "910-788-5290",
    address: "7 Arizona Point",
    dateOfBirth: new Date("1/19/2009"),
    email: "lhiley1@moonfruit.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ekaasmann2",
    fullName: "Emili Kaasmann",
    phone: "798-342-6414",
    address: "804 Dottie Circle",
    dateOfBirth: new Date("12/31/1998"),
    email: "ekaasmann2@amazon.de",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "mchetwind3",
    fullName: "Marylynne Chetwind",
    phone: "555-385-3208",
    address: "5630 Monica Pass",
    dateOfBirth: new Date("1/27/2010"),
    email: "mchetwind3@shutterfly.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "carnefield4",
    fullName: "Cacilie Arnefield",
    phone: "796-662-2503",
    address: "0448 Debs Plaza",
    dateOfBirth: new Date("5/8/2010"),
    email: "carnefield4@answers.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ladamec5",
    fullName: "Laurella Adamec",
    phone: "703-982-7767",
    address: "630 Pond Drive",
    dateOfBirth: new Date("2/20/2000"),
    email: "ladamec5@usatoday.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "fsneesby6",
    fullName: "Francyne Sneesby",
    phone: "106-818-2836",
    address: "3 Dovetail Trail",
    dateOfBirth: new Date("6/7/2007"),
    email: "fsneesby6@about.me",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ldambrogi7",
    fullName: "Leif D'Ambrogi",
    phone: "650-523-1733",
    address: "069 Carberry Parkway",
    dateOfBirth: new Date("1/28/2001"),
    email: "ldambrogi7@google.nl",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kinsworth8",
    fullName: "Karim Insworth",
    phone: "612-547-1784",
    address: "41237 Center Terrace",
    dateOfBirth: new Date("12/14/1992"),
    email: "kinsworth8@dion.ne.jp",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "nmcentagart9",
    fullName: "Nathalia McEntagart",
    phone: "523-152-6161",
    address: "700 Southridge Street",
    dateOfBirth: new Date("7/9/2006"),
    email: "nmcentagart9@studiopress.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "wscroggsa",
    fullName: "Wilhelmine Scroggs",
    phone: "501-770-5859",
    address: "7840 Kings Lane",
    dateOfBirth: new Date("11/11/1997"),
    email: "wscroggsa@nps.gov",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "vballochb",
    fullName: "Valeda Balloch",
    phone: "505-541-3042",
    address: "90 Becker Junction",
    dateOfBirth: new Date("2/20/2007"),
    email: "vballochb@deliciousdays.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "livoshinc",
    fullName: "Lisbeth Ivoshin",
    phone: "458-686-7401",
    address: "5 Kingsford Junction",
    dateOfBirth: new Date("9/30/1993"),
    email: "livoshinc@intel.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "aantoszewskid",
    fullName: "Archibald Antoszewski",
    phone: "538-344-6177",
    address: "29089 Fremont Trail",
    dateOfBirth: new Date("6/27/2001"),
    email: "aantoszewskid@sourceforge.net",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "lbeese",
    fullName: "Lindsay Bees",
    phone: "997-911-2014",
    address: "829 Bonner Street",
    dateOfBirth: new Date("8/28/2008"),
    email: "lbeese@forbes.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "wweetchf",
    fullName: "Wynn Weetch",
    phone: "801-767-7867",
    address: "40433 West Point",
    dateOfBirth: new Date("9/7/2009"),
    email: "wweetchf@npr.org",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "jpiggremg",
    fullName: "Julina Piggrem",
    phone: "588-762-2963",
    address: "80 Mitchell Parkway",
    dateOfBirth: new Date("4/5/1991"),
    email: "jpiggremg@jiathis.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "smastersonh",
    fullName: "Shay Masterson",
    phone: "917-292-1757",
    address: "2922 Kedzie Pass",
    dateOfBirth: new Date("4/6/2000"),
    email: "smastersonh@icio.us",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "jgorgeni",
    fullName: "Jada Gorgen",
    phone: "945-755-6506",
    address: "5027 Utah Point",
    dateOfBirth: new Date("2/6/2010"),
    email: "jgorgeni@technorati.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cslatterj",
    fullName: "Carie Slatter",
    phone: "377-972-4235",
    address: "46 Bartelt Road",
    dateOfBirth: new Date("7/18/1997"),
    email: "cslatterj@wiley.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cbudgeyk",
    fullName: "Corrie Budgey",
    phone: "671-274-6057",
    address: "5 Basil Way",
    dateOfBirth: new Date("4/8/1992"),
    email: "cbudgeyk@comcast.net",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "srotgel",
    fullName: "Sharona Rotge",
    phone: "692-570-7013",
    address: "76653 Mccormick Hill",
    dateOfBirth: new Date("11/11/1993"),
    email: "srotgel@icq.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "dgawkesm",
    fullName: "Devondra Gawkes",
    phone: "151-726-2720",
    address: "99439 Brentwood Trail",
    dateOfBirth: new Date("10/4/2004"),
    email: "dgawkesm@discovery.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ghryncewiczn",
    fullName: "Gayle Hryncewicz",
    phone: "847-626-0709",
    address: "035 Oak Valley Drive",
    dateOfBirth: new Date("1/9/2006"),
    email: "ghryncewiczn@marriott.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "wjuliano",
    fullName: "West Julian",
    phone: "190-997-0510",
    address: "4369 Sachtjen Place",
    dateOfBirth: new Date("11/19/2008"),
    email: "wjuliano@webs.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "wdunp",
    fullName: "Waring Dun",
    phone: "435-381-2155",
    address: "97 Thierer Street",
    dateOfBirth: new Date("2/5/2000"),
    email: "wdunp@hp.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "fperrelleq",
    fullName: "Floria Perrelle",
    phone: "122-513-6700",
    address: "701 Logan Alley",
    dateOfBirth: new Date("9/2/1992"),
    email: "fperrelleq@t.co",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "gbillingslyr",
    fullName: "Garwood Billingsly",
    phone: "134-179-8690",
    address: "5 Bultman Place",
    dateOfBirth: new Date("3/10/1994"),
    email: "gbillingslyr@is.gd",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cgainsefords",
    fullName: "Corbett Gainseford",
    phone: "829-535-1556",
    address: "03 Packers Parkway",
    dateOfBirth: new Date("12/12/2002"),
    email: "cgainsefords@webnode.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "sprendivillet",
    fullName: "Sophi Prendiville",
    phone: "158-903-6264",
    address: "91 International Pass",
    dateOfBirth: new Date("8/23/2005"),
    email: "sprendivillet@biglobe.ne.jp",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "lbridgemanu",
    fullName: "Laurel Bridgeman",
    phone: "230-596-3841",
    address: "4 Shopko Pass",
    dateOfBirth: new Date("8/5/2004"),
    email: "lbridgemanu@123-reg.co.uk",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "hruddlesdenv",
    fullName: "Hali Ruddlesden",
    phone: "539-603-7525",
    address: "441 Hoffman Lane",
    dateOfBirth: new Date("6/10/1998"),
    email: "hruddlesdenv@sina.com.cn",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ncomerfordw",
    fullName: "Nikola Comerford",
    phone: "590-747-2774",
    address: "460 Fremont Drive",
    dateOfBirth: new Date("4/10/1997"),
    email: "ncomerfordw@scientificamerican.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "gtheyerx",
    fullName: "Gery Theyer",
    phone: "438-410-0423",
    address: "404 Golf Plaza",
    dateOfBirth: new Date("3/25/2002"),
    email: "gtheyerx@so-net.ne.jp",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ltamblingsony",
    fullName: "Legra Tamblingson",
    phone: "285-346-9399",
    address: "198 Amoth Parkway",
    dateOfBirth: new Date("12/27/1990"),
    email: "ltamblingsony@theglobeandmail.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cjeandonz",
    fullName: "Corella Jeandon",
    phone: "499-145-0131",
    address: "0319 Vera Lane",
    dateOfBirth: new Date("7/5/1997"),
    email: "cjeandonz@hexun.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cashington10",
    fullName: "Chadd Ashington",
    phone: "452-600-9334",
    address: "61681 Glendale Parkway",
    dateOfBirth: new Date("11/11/2009"),
    email: "cashington10@youku.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "acaldwall11",
    fullName: "Antonina Caldwall",
    phone: "536-360-1644",
    address: "07668 Jackson Pass",
    dateOfBirth: new Date("8/19/1997"),
    email: "acaldwall11@so-net.ne.jp",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "churdwell12",
    fullName: "Cosimo Hurdwell",
    phone: "377-473-1633",
    address: "0935 Blue Bill Park Road",
    dateOfBirth: new Date("9/12/1990"),
    email: "churdwell12@godaddy.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "jparrington13",
    fullName: "Jermayne Parrington",
    phone: "733-527-7983",
    address: "764 Mesta Parkway",
    dateOfBirth: new Date("12/11/1994"),
    email: "jparrington13@soup.io",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "dbreslau14",
    fullName: "Deonne Breslau",
    phone: "418-611-4630",
    address: "6 Anhalt Way",
    dateOfBirth: new Date("9/7/1998"),
    email: "dbreslau14@state.gov",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ctatteshall15",
    fullName: "Carma Tatteshall",
    phone: "120-784-1194",
    address: "2 Maple Wood Court",
    dateOfBirth: new Date("3/1/1999"),
    email: "ctatteshall15@sohu.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ahatchman16",
    fullName: "Abramo Hatchman",
    phone: "554-607-0090",
    address: "77918 David Parkway",
    dateOfBirth: new Date("7/31/2003"),
    email: "ahatchman16@springer.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kjuris17",
    fullName: "Kaiser Juris",
    phone: "441-317-9557",
    address: "5 Quincy Plaza",
    dateOfBirth: new Date("3/7/1990"),
    email: "kjuris17@tmall.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ilamplough18",
    fullName: "Isa Lamplough",
    phone: "466-998-9455",
    address: "8795 Ronald Regan Terrace",
    dateOfBirth: new Date("2/19/1993"),
    email: "ilamplough18@list-manage.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cperacco19",
    fullName: "Cherlyn Peracco",
    phone: "723-555-0139",
    address: "27276 Susan Junction",
    dateOfBirth: new Date("10/27/2004"),
    email: "cperacco19@cam.ac.uk",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "jmenault1a",
    fullName: "Julie Menault",
    phone: "964-326-4200",
    address: "581 Schmedeman Circle",
    dateOfBirth: new Date("6/15/2000"),
    email: "jmenault1a@twitter.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "edella1b",
    fullName: "Ermengarde Della",
    phone: "729-310-4043",
    address: "611 Holy Cross Terrace",
    dateOfBirth: new Date("11/2/2007"),
    email: "edella1b@illinois.edu",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kdella1c",
    fullName: "Kim Della Scala",
    phone: "373-804-4424",
    address: "1588 Sutherland Place",
    dateOfBirth: new Date("12/1/1991"),
    email: "kdella1c@hexun.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ebosley1d",
    fullName: "Ethe Bosley",
    phone: "283-531-7582",
    address: "566 Mariners Cove Road",
    dateOfBirth: new Date("4/5/2005"),
    email: "ebosley1d@sina.com.cn",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "rdobie1e",
    fullName: "Royal Dobie",
    phone: "950-487-0956",
    address: "2087 Sundown Parkway",
    dateOfBirth: new Date("2/2/2002"),
    email: "rdobie1e@list-manage.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "elukins1f",
    fullName: "Ermengarde Lukins",
    phone: "954-835-9497",
    address: "4020 Schiller Circle",
    dateOfBirth: new Date("5/5/1992"),
    email: "elukins1f@shop-pro.jp",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "jstroton1g",
    fullName: "Jocelin Stroton",
    phone: "322-359-4725",
    address: "4 Kensington Parkway",
    dateOfBirth: new Date("7/6/1995"),
    email: "jstroton1g@free.fr",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "isuccamore1h",
    fullName: "Iggie Succamore",
    phone: "383-167-6190",
    address: "2058 Fairfield Street",
    dateOfBirth: new Date("1/28/2009"),
    email: "isuccamore1h@hao123.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cmccloud1i",
    fullName: "Cody McCloud",
    phone: "703-597-6344",
    address: "771 Emmet Parkway",
    dateOfBirth: new Date("6/19/1990"),
    email: "cmccloud1i@trellian.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "gprisk1j",
    fullName: "Gawen Prisk",
    phone: "766-744-5426",
    address: "2 Veith Avenue",
    dateOfBirth: new Date("5/10/2005"),
    email: "gprisk1j@telegraph.co.uk",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ddavidovici1k",
    fullName: "Dorey Davidovici",
    phone: "360-837-6841",
    address: "18281 Ryan Place",
    dateOfBirth: new Date("1/5/1999"),
    email: "ddavidovici1k@liveinternet.ru",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "gtomaszczyk1l",
    fullName: "Gypsy Tomaszczyk",
    phone: "692-457-9163",
    address: "9 Warner Plaza",
    dateOfBirth: new Date("1/6/2009"),
    email: "gtomaszczyk1l@symantec.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "sgrisewood1m",
    fullName: "Sigismund Grisewood",
    phone: "547-246-8269",
    address: "898 Waxwing Court",
    dateOfBirth: new Date("2/24/1999"),
    email: "sgrisewood1m@topsy.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "scornilleau1n",
    fullName: "Susan Cornilleau",
    phone: "378-267-7704",
    address: "9951 Ilene Center",
    dateOfBirth: new Date("8/15/2000"),
    email: "scornilleau1n@walmart.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "grizzardi1o",
    fullName: "Gerianne Rizzardi",
    phone: "705-746-0279",
    address: "26 Colorado Street",
    dateOfBirth: new Date("6/3/2009"),
    email: "grizzardi1o@ucla.edu",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "mwilliamson1p",
    fullName: "Mathe Williamson",
    phone: "948-118-1591",
    address: "06830 Village Green Junction",
    dateOfBirth: new Date("10/10/2005"),
    email: "mwilliamson1p@dailymotion.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kdumbelton1q",
    fullName: "Katerine Dumbelton",
    phone: "932-959-6334",
    address: "89081 Emmet Trail",
    dateOfBirth: new Date("1/23/2006"),
    email: "kdumbelton1q@163.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cjulyan1r",
    fullName: "Cecilio Julyan",
    phone: "431-202-8690",
    address: "9 Porter Street",
    dateOfBirth: new Date("2/3/2009"),
    email: "cjulyan1r@cam.ac.uk",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "noffen1s",
    fullName: "Nial Offen",
    phone: "539-900-6473",
    address: "80 Elmside Lane",
    dateOfBirth: new Date("1/30/1994"),
    email: "noffen1s@google.cn",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "lbolger1t",
    fullName: "Lombard Bolger",
    phone: "923-130-1162",
    address: "13 Everett Park",
    dateOfBirth: new Date("5/23/1994"),
    email: "lbolger1t@google.es",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "qrollett1u",
    fullName: "Quint Rollett",
    phone: "812-466-1621",
    address: "9281 Browning Terrace",
    dateOfBirth: new Date("7/12/2009"),
    email: "qrollett1u@imgur.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "hhutsby1v",
    fullName: "Hunt Hutsby",
    phone: "364-269-8539",
    address: "5298 Moulton Trail",
    dateOfBirth: new Date("3/6/2005"),
    email: "hhutsby1v@1und1.de",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "wcheney1w",
    fullName: "Wilone Cheney",
    phone: "932-757-1216",
    address: "7 Fuller Point",
    dateOfBirth: new Date("2/4/1990"),
    email: "wcheney1w@narod.ru",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "jmoggie1x",
    fullName: "Jessi Moggie",
    phone: "414-912-8751",
    address: "602 Burning Wood Alley",
    dateOfBirth: new Date("6/30/1994"),
    email: "jmoggie1x@mail.ru",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "omilstead1y",
    fullName: "Orrin Milstead",
    phone: "717-283-9402",
    address: "82 Huxley Pass",
    dateOfBirth: new Date("12/1/1999"),
    email: "omilstead1y@histats.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ckerswell1z",
    fullName: "Claire Kerswell",
    phone: "299-683-5292",
    address: "4 Scott Street",
    dateOfBirth: new Date("11/8/1996"),
    email: "ckerswell1z@slashdot.org",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "fbushaway20",
    fullName: "Frederico Bushaway",
    phone: "119-441-2702",
    address: "422 Hintze Trail",
    dateOfBirth: new Date("1/24/1995"),
    email: "fbushaway20@census.gov",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kjosefs21",
    fullName: "Kit Josefs",
    phone: "913-726-5501",
    address: "42348 Ramsey Drive",
    dateOfBirth: new Date("4/2/2008"),
    email: "kjosefs21@wordpress.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kvaldes22",
    fullName: "Kathy Valdes",
    phone: "880-829-3131",
    address: "3837 Mesta Hill",
    dateOfBirth: new Date("7/15/2000"),
    email: "kvaldes22@hibu.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "bfleis23",
    fullName: "Batsheva Fleis",
    phone: "195-996-5425",
    address: "17760 Dawn Court",
    dateOfBirth: new Date("5/19/1992"),
    email: "bfleis23@economist.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "vtrevaskis24",
    fullName: "Vally Trevaskis",
    phone: "885-928-2718",
    address: "73 Kipling Circle",
    dateOfBirth: new Date("4/28/2006"),
    email: "vtrevaskis24@typepad.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "imilmo25",
    fullName: "Idalina Milmo",
    phone: "334-213-9373",
    address: "0730 Melody Drive",
    dateOfBirth: new Date("3/8/1992"),
    email: "imilmo25@bluehost.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "lklejna26",
    fullName: "Lanny Klejna",
    phone: "161-843-2433",
    address: "226 Fallview Junction",
    dateOfBirth: new Date("12/12/1997"),
    email: "lklejna26@dagondesign.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "cporson27",
    fullName: "Calv Porson",
    phone: "435-702-2166",
    address: "160 Golf Course Circle",
    dateOfBirth: new Date("9/1/2004"),
    email: "cporson27@joomla.org",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "caldis28",
    fullName: "Corney Aldis",
    phone: "630-142-5811",
    address: "7 Westend Trail",
    dateOfBirth: new Date("11/12/2004"),
    email: "caldis28@etsy.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "kdole29",
    fullName: "Kylie Dole",
    phone: "127-834-2907",
    address: "6174 Ronald Regan Plaza",
    dateOfBirth: new Date("10/10/2004"),
    email: "kdole29@samsung.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "fgrigolon2a",
    fullName: "Fayre Grigolon",
    phone: "938-641-3825",
    address: "7 Hansons Crossing",
    dateOfBirth: new Date("12/12/2004"),
    email: "fgrigolon2a@cloudflare.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "bmalster2b",
    fullName: "Brandi Malster",
    phone: "559-440-4566",
    address: "7009 Cambridge Avenue",
    dateOfBirth: new Date("8/20/2010"),
    email: "bmalster2b@php.net",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "dacome2c",
    fullName: "Dar Acome",
    phone: "861-144-3752",
    address: "7 Summer Ridge Hill",
    dateOfBirth: new Date("12/25/1995"),
    email: "dacome2c@imageshack.us",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ejurn2d",
    fullName: "Esme Jurn",
    phone: "462-960-3209",
    address: "80331 2nd Junction",
    dateOfBirth: new Date("12/23/2003"),
    email: "ejurn2d@comsenz.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ghackworthy2e",
    fullName: "Gavrielle Hackworthy",
    phone: "460-639-7222",
    address: "2 Acker Terrace",
    dateOfBirth: new Date("9/21/2008"),
    email: "ghackworthy2e@jiathis.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "abatrip2f",
    fullName: "Ashbey Batrip",
    phone: "266-723-6305",
    address: "49733 Crescent Oaks Avenue",
    dateOfBirth: new Date("1/20/1993"),
    email: "abatrip2f@deliciousdays.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ksiddaley2g",
    fullName: "Kenton Siddaley",
    phone: "120-387-1547",
    address: "4 Morning Alley",
    dateOfBirth: new Date("1/29/2000"),
    email: "ksiddaley2g@twitter.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "vgepheart2h",
    fullName: "Victor Gepheart",
    phone: "133-661-3346",
    address: "4 Delaware Trail",
    dateOfBirth: new Date("4/9/1994"),
    email: "vgepheart2h@mediafire.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ecanadas2i",
    fullName: "Elsey Canadas",
    phone: "987-848-9376",
    address: "507 Ridgeview Alley",
    dateOfBirth: new Date("1/6/2005"),
    email: "ecanadas2i@intel.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "aworboy2j",
    fullName: "Annabelle Worboy",
    phone: "509-554-8486",
    address: "81 Mcbride Terrace",
    dateOfBirth: new Date("8/27/2007"),
    email: "aworboy2j@w3.org",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "rlantaph2k",
    fullName: "Ring Lantaph",
    phone: "683-225-2751",
    address: "99 Loomis Center",
    dateOfBirth: new Date("8/17/2005"),
    email: "rlantaph2k@ehow.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "rgredden2l",
    fullName: "Robbie Gredden",
    phone: "244-708-7982",
    address: "9 Dottie Junction",
    dateOfBirth: new Date("1/19/1995"),
    email: "rgredden2l@cyberchimps.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "csimonou2m",
    fullName: "Cherish Simonou",
    phone: "874-806-7744",
    address: "6 Morrow Circle",
    dateOfBirth: new Date("5/16/1993"),
    email: "csimonou2m@google.ru",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "taindrais2n",
    fullName: "Tris Aindrais",
    phone: "364-327-8231",
    address: "94 Vahlen Circle",
    dateOfBirth: new Date("9/2/1991"),
    email: "taindrais2n@imdb.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "sbrigge2o",
    fullName: "Sibyl Brigge",
    phone: "626-776-3575",
    address: "89262 Fairview Street",
    dateOfBirth: new Date("12/1/2004"),
    email: "sbrigge2o@wikia.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "ldixsee2p",
    fullName: "Lia Dixsee",
    phone: "598-969-2033",
    address: "974 Elgar Circle",
    dateOfBirth: new Date("1/9/1995"),
    email: "ldixsee2p@patch.com",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "fbultitude2q",
    fullName: "Finlay Bultitude",
    phone: "305-471-0192",
    address: "4100 Bluejay Trail",
    dateOfBirth: new Date("2/16/2005"),
    email: "fbultitude2q@free.fr",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
  {
    username: "gjurek2r",
    fullName: "Garvin Jurek",
    phone: "322-685-5231",
    address: "2 Calypso Avenue",
    dateOfBirth: new Date("11/5/2001"),
    email: "gjurek2r@state.gov",
    imageUrl: "https://picsum.photos/200",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    role: "USER",
  },
];
