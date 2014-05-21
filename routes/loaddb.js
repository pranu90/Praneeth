exports.loaddatabase = function(req, res) {
	
	var MongoClient = require('mongodb').MongoClient, format = require('util').format;
	MongoClient.connect('mongodb://127.0.0.1:27017/project226',  function(err, db) {
		if(err) throw err;
		db.collection('products').insert([{
			productid: 1,
			Name: "Sharp LC-60C7500U 60-Inch Class Aquos 1080p 240Hz Smart LED HDTV with Quattron",
			Category: "TV",
			Price: 1437.99,
			Brand: "Sharp",
			Descriptionription: "Quattron: Exclusive Quattron color technology delivers a billion more colors, so you get a more powerful picture with brighter yellows, deeper blues, and richer gold's - a feat that standard TV simply can't achieveAquos Display: The Aquos 1080p LED Display with a 10 million: 1 contrast ratio creates a picture so real you can see the difference"
		},
		{
			productid: 2,
			Name: "Seiki SE20HS02 20-Inch 720p 60Hz LED TV (Black)",
			Category: "TV",
			Price: 157.89,
			Brand: "Seiki",
			Description: "20-inch class HDTV with 1366 x 768 resolution, 16:9 aspect ratio and 60Hz refresh rate. Built in Video Noise Reduction. Support V-CHIP/CCD/Favorite Channel Edition"
		},
		{
			productid: 3,
			Name: "Upstar P32EWX 32-Inch 720p 60Hz LED HDTV",
			Category: "TV",
			Price: 221.65,
			Brand: "Upstar",
			Description: "Upstar USA 32 LED HDTV 1080P 7ms. HDMI/HDCP/VGA Build in Hotel Menu. PC Audio in USB headphone out put. Ultra slim light weight. Crystal Clear Picture"
		},
		{
			productid: 4,
			Name: "Nexus NX5503 55-Inch SLIM E-LED 1080p 120 Hz HDTV (Black)",
			Category: "TV",
			Price: 1462.29,
			Brand: "Nexus",
			Description: "55-inch LED backlit display. Resolution: 1920 X 1080; Progressive Scan. 3D Digital Comb Filter. Digital Noise Reduction"
		},
		{
			productid: 5,
			Name: "NEC V801 80-Inch 1080p 60Hz LED TV with Integrated Speakers",
			Category: "TV",
			Price: 7211.90,
			Brand: "NEC",
			Description: "Panel Technology UV²A Viewable Image Size 80'' Native Resolution 1920 x 1080 Pixel Pitch 0.92mm. Backlight Type LED Edge-lit Brightness (typical) 320cd/m2 Brightness (maximum) 460cd/m2 Contrast Ratio (typical) 5000:1"
		},
		{
			productid: 6,
			Name: "Haier LE58F3281 58-Inch 1080p 120Hz LED HDTV",
			Category: "TV",
			Price: 943.55,
			Brand: "Haier",
			Description: "1080p Full HD with 120Hz refresh rate. Roku Ready for quick and easy viewing of your favorite programs. Energy Star 6.0. Multiple A/V inputs, including 3 HDMI (1 MHL enabled) and 1 Component"
		},
		{
			productid: 7,
			Name: "Orbital OBL50058ES 58-Inch 1080p 120Hz LED HDTV",
			Category: "TV",
			Price: 1126.62,
			Brand: "Orbital",
			Description: "58 inch HD screen. 3 HDMI and 1 USB inputs. Includes high quality solid tempered glass base"
		},
		{
			productid: 8,
			Name: "Samsung UN32EH5300 32-Inch 1080p 60 Hz Smart LED HDTV (2013 Model)",
			Category: "TV",
			Price: 1126.62,
			Brand: "Samsung",
			Description: "Smart TV. Signature Services. Smart Hub. Built-in Wi-Fi"
		},
		{
			productid: 9,
			Name: "Samsung UN32EH4003 32-inch 720p 60Hz LED HDTV (Black)",
			Category: "TV",
			Price: 247.99,
			Brand: "Samsung",
			Description: "HD LED Picture Quality. ConnectShare Movie. Wide Color Enhancement. Clear Motion Rate 60"
		},
		{
			productid: 10,
			Name: "VIZIO E241i-B1 24-Inch 1080p 60Hz Smart LED HDTV (Black)",
			Category: "TV",
			Price: 179.99,
			Brand: "VIZIO",
			Description : "VIZIO Internet Apps Plus - Instantly enjoy the latest hit movies, TV shows, music and even more premium apps straight from the Internet to your TV.. Razor LED backlight - Distributes LEDs along the edge of the screen for a brilliant picture in an ultra-thin design. Built-in Wi-Fi - Connect with high-speed wireless for easy, clutter-free Internet access."

		},
		{
			productid: 11,
			Name: "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
			Author: "Donna Tartt",
			Category: "Books",
			Price: 16.94,
			Description : "Hardcover: 775 pages. Publisher: Little, Brown and Company; First Edition edition (October 22, 2013). Language: English. ISBN-10: 0316055433. ISBN-13: 978-0316055437. Product Dimensions: 9.5 x 6.2 x 1.7 inches"
		},
		{
			productid: 12,
			Name: "And the Mountains Echoed",
			Author: "Khaled Hosseini",
			Category: "Books",
			Price: 16.36,
			Description : "Khaled Hosseini, the #1 New York Times–bestselling author of The Kite Runner and A Thousand Splendid Suns, has written a new novel about how we love, how we take care of one another, and how the choices we make resonate through generations. In this tale revolving around not just parents and children but brothers and sisters, cousins and caretakers, Hosseini explores the many ways in which families nurture, wound, betray, honor, and sacrifice for one another; and how often we are surprised by the actions of those closest to us, at the times that matter most."
		},
		{
			productid: 13,
			Name: "Thank You for Your Service",
			Author: "David Finkel",
			Category: "Books",
			Price: 14.69,
			Description : "The wars of the past decade have been covered by brave and talented reporters, but none has reckoned with the psychology of these wars as intimately as the Pulitzer Prize-winning journalist David Finkel. For The Good Soldiers, his bestselling account from the front lines of Baghdad, Finkel embedded with the men of the 2-16 Infantry Battalion during the infamous “surge,” a grueling fifteen-month tour that changed them all forever. In Finkel’s hands, readers can feel what these young men were experiencing, and his harrowing story instantly became a classic in the literature of modern war. "
		},
		{
			productid: 14,
			Name: "Life After Life: A Novel",
			Author: "Kate Atkinson",
			Category: "Books",
			Price: 27.99,
			Description : "On a cold and snowy night in 1910, Ursula Todd is born to an English banker and his wife. She dies before she can draw her first breath. On that same cold and snowy night, Ursula Todd is born, lets out a lusty wail, and embarks upon a life that will be, to say the least, unusual. For as she grows, she also dies, repeatedly, in a variety of ways, while the young century marches on towards its second cataclysmic world war. "
		},
		{
			productid: 15,
			Name: "Pilgrim's Wilderness: A True Story of Faith and Madness on the Alaska Frontier",
			Author: "Tom Kizzia",
			Category: "Books",
			Price: 19.08,
			Description : "Into the Wild meets Helter Skelter in this riveting true story of a modern-day homesteading family in the deepest reaches of the Alaskan wilderness – and of the chilling secrets of its maniacal, spellbinding patriarch."
		},
		{
			productid: 16,
			Name: "Lawrence in Arabia: War, Deceit, Imperial Folly and the Making of the Modern Middle East",
			Author: "Scott Anderson",
			Category: "Books",
			Price: 16.36,
			Description : "A thrilling and revelatory narrative of one of the most epic and consequential periods in 20th century history – the Arab Revolt and the secret “great game” to control the Middle East"
		},
		{
			productid: 17,
			Name: "Tenth of December: Stories",
			Author: "George Saunders",
			Category: "Books",
			Price: 14.64,
			Description : "Unsettling, insightful, and hilarious, the stories in Tenth of December—through their manic energy, their focus on what is redeemable in human beings, and their generosity of spirit—not only entertain and delight; they fulfill Chekhov’s dictum that art should “prepare us for tenderness.”"
		},
		{
			productid: 18,
			Name: "The Son",
			Author: "Philipp Meyer",
			Category: "Books",
			Price: 15.81,
			Description : "Philipp Meyer, the acclaimed author of American Rust, returns with The Son: an epic of the American West and a multigenerational saga of power, blood, land, and oil that follows the rise of one unforgettable Texas family, from the Comanche raids of the 1800s to the to the oil booms of the 20th century."
		},
		{
			productid: 19,
			Name: "A House in the Sky: A Memoir",
			Author: "Amanda Lindhout",
			Category: "Books",
			Price: 17.78,
			Description : "The dramatic and redemptive memoir of a woman whose curiosity led her to the world’s most beautiful and remote places, its most imperiled and perilous countries, and then into fifteen months of harrowing captivity—an exquisitely written story of courage, resilience, and grace."
		},
		{
			productid: 20,
			Name: "Eleanor & Park",
			Author: "Rainbow Rowell",
			Category: "Books",
			Price: 10.78,
			Description : "Set over the course of one school year in 1986, this is the story of two star-crossed misfits—smart enough to know that first love almost never lasts, but brave and desperate enough to try. When Eleanor meets Park, you’ll remember your own first love—and just how hard it pulled you under."
		},
		{
			productid: 21,
			Name: "CND - VINYLUX TOP COAT Weekly Polish Creative Nail Design Manicure Lacquer",
			Category: "Nail Polish",
			Price: 6.75,
			Weight: "2.9 ounces",
			Description : "High Definition Color and Gloss for Week Long Perfection Air dries in under 9 minutes - Without the use of an LED or UV Lamp The Self-adhering color coat means NO base coat and faster service time VINYLUX Top Coat actually toughens over time with exposure to natural light with ProLight technology"
		},
		{
			productid: 22,
			Name: "Creative Nail Creative Nail Design Vinylux Nail Lacquer, Weekly Top Coat",
			Category: "Nail Polish",
			Price: 5.41,
			Weight: "0.5 ounces",
			Description : "Resists chips and has enhanced durability. A unique new polish that will last better than ordinary polish"
		},
		{
			productid: 23,
			Name: "CND Vinylux - Open Road Collection - Desert Poppy #163",
			Category: "Nail Polish",
			Price: 8.75,
			Weight: "2.9 ounces",
			Description : "CND Vinylux - Open Road Collection - Desert Poppy #163. This item is non-returnable"
		},
		{
			productid: 24,
			Name: "China Glaze Nail Lacquer, Too Yacht To Handle",
			Category: "Nail Polish",
			Price: 6.35,
			Weight: "0.5 ounces",
			Description : "Long-wearing nail lacquer. Flexible and will not chip. Non-thickening formula no thinner required"
		},
		{
			productid: 25,
			Name: "CND Vinylux #132 Negligee Nail Polish Lacquer",
			Category: "Nail Polish",
			Price: 9.95,
			Weight: "0.5 ounces",
			Description : "High Definition Color and Gloss for Week Long Perfection Air dries in under 9 minutes - Without the use of an LED or UV Lamp The Self-adhering color coat means NO base coat and faster service time VINYLUX Top Coat actually toughens over time with exposure to natural light with ProLight technology"
		},
		{
			productid: 26,
			Name: "CND Vinylux Weekly Nail Polish",
			Category: "Nail Polish",
			Price: 7.25,
			Weight: "0.5 ounces",
			Description : "Resists chips and has enhanced durability. Comes in several different colors. A unique new polish that will last better than ordinary polish"
		},
		{
			productid: 27,
			Name: "O.P.I Gelcolor Collection Nail Gel Lacquer",
			Category: "Nail Polish",
			Price: 16.95,
			Weight: "0.5 ounces",
			Description : "Advanced Gel Polymer. High-speed LED technology. Iconic OPI color at the speed of light"
		},
		{
			productid: 28,
			Name: "Essie Starting Over Summer 2007 Collection",
			Category: "Nail Polish",
			Price: 5.99,
			Weight: "5.9 ounces",
			Description : "pink-toned light purple creme nail polish color. From the Essie Go Overboard Collection, Spring 2012. Chip resistant formula. Gives long lasting manicures. Quick drying on nails"
		},
		{
			productid: 29,
			Name: "Creative Nail Shellac Rose Bud",
			Category: "Nail Polish",
			Price: 14.86,
			Weight: "0.25 ounces",
			Description : "Off in minutes. On like polish. Wears like gel. 14 day wear"
		},
		{
			productid: 30,
			Name: "Essie Protein Base Coat",
			Category: "Nail Polish",
			Price: 5.87,
			Weight: "0.5 ounces",
			Description : "Base coat for strong, healthy nails. Helps protect the nail"
		},
		{
			productid: 31,
			Name: "Summit FFBF285SSIM 27 1/2 13.8 cu. ft. Counter-Depth Bottom-Freezer Refrigerator",
			Category: "Refrigerator",
			Color: "Silver",
			Price: 1549.00,
			Description : "Energy efficient design A bottom freezer and single compressor give this unit a better performance with energy savings. Bottom freezer Thoughtfully designed unit saves energy waste by putting the freezer under the refrigerator to keep commonly used contents at eye level. Factory installed icemaker Forget the plastic trays and enjoy the convenience of ready-made ice in your freezer"
		},
		{
			productid: 32,
			Name: "Summit : FFBF280W 27 1/2 13.8 cu. ft. Counter-Depth Bottom-Freezer Refrigerator - White",
			Category: "Refrigerator",
			Color: "White",
			Price: 1279.00,
			Description : "Bottom freezer adds energy efficient convenience to any home. Deluxe interior features dual crispers, glass shelves, and scalloped steel wine rack. Gliding freezer drawers keep the cold inside for less waste and more storage options"
		},
		{
			productid: 33,
			Name: "LG LSC23924SW 23.0 Cu. Ft. White Side-By-Side Refrigerator - Energy Star",
			Category: "Refrigerator",
			Color: "White",
			Price: 1339.00,
			Description : "23. cu.ft. Capacity. Digital Temperature Controls. Tall Ice & Water Dispenser"
		},
		{
			productid: 34,
			Name: "Frigidaire FFHT2117L 20.5 Cubic Foot Top Freezer Refrigerator with Store-More Organization System",
			Category: "Refrigerator",
			Color: "Silver",
			Price: 767.99,
			Description : "Sliding Glass Shelves. Humidity-Controlled Crispers. Cool Zone Drawer. Gallon Door Bin. Interior Light"
		},
		{
			productid: 35,
			Name: "Fisher Paykel RF175WCRUX1 17.5 Cu. Ft. Stainless Steel Counter Depth Bottom Freezer Refrigerator - Energy Star",
			Category: "Refrigerator",
			Color: "Silver",
			Price: 2033.49,
			Description : "Premium Energy Efficiency - Energy star. ActiveSmart(TM) system. Internal filtration system. Built in ice maker. External Water Dispenser" 
		},
		{
			productid: 36,
			Name: "Frigidaire FFTR1814LB 18.2 Cu. Ft. Black Top Freezer Refrigerator",
			Category: "Refrigerator",
			Color: "Black",
			Price: 679.00,
			Description : "18 cu. ft. top freezer refrigerator. Two Store-More humidity-controlled crisper drawers. Store-More gallon door shelf. Two wire sliding shelves"
		},
		{
			productid: 37,
			Name: "Haier ECR27W 2.7-Cubic Foot Energy-Star Refrigerator/Freezer, White",
			Category: "Refrigerator",
			Color: "White",
			Price: 127.20,
			Description : "Half-width freezer compartment with ice cube tray. 2 full-width interior wire shelves. 2 full-width door storage shelves. Accommodates 2 Liter and Tall Bottles" 
		},
		{
			productid: 38,
			Name: "GE GTS22KBPCC 21.7 cu. Ft. Top-Freezer Refrigerator - Bisque",
			Category: "Refrigerator",
			Color: "Bisque",
			Price: 2066.78,
			Description : "Adjustable spillproof glass shelves. Upfront illuminated temperature controls. Adjustable-humidity crisper drawers. Adjustable gallon door bins"
		},
		{
			productid: 39,
			Name: "Electrolux E23CS78HPS 36' Counter-Depth Refrigerator with PureAdvantage® Filtration Systems and Theatr, Stainless Steel",
			Category: "Refrigerator",
			Color: "Silver",
			Price: 2598.99,
			Description : "Electrolux ICON Professional 226 cu ft CounterDepth SidebySide Refrigerator with PureAdvantage Filtration Systems CustomDesign FullDepth Glass Shelves and SmoothGlide FullExtension Drawers E23CS78HPS"
		},
		{
			productid: 40,
			Name: "Electrolux EW26SS70IS 25.9 cu. ft. Side by Side Refrigerator w/Wave-Touch - Stainless Steel",
			Color: "Silver",
			Category: "Refrigerator",
			Price: 1273.04,
			Description : "25.9 cu. ft. Side by Side Refrigerator, Most Usable Capacity PureAdvantage(TM) Air & Water Filtration for Fresh Clean Air and Filtered Ice and Water Luxury-Glide(TM) Crispers Drawers keep produce fresh with adjustable humidity control Luxury-Design(TM) Glass Shelves featuring Luxury-Glide(TM) rack system that extends smoothly Energy Star Qualified"
		}
		],
		function(err, docs) {
			if (err) res.json(err);
			else{
				res.send("Products loaded Sucessfully");
				db.close();
			}
		});            
	});
};
