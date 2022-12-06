let cards = [
    {
        h1: "Walk-on's Bistreauxs & Bar",
        p: "There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life in every restaurant. Whether you’re here for dinner with the family, date night, cocktails with the girls, or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you",
    a: "https://walk-ons.com/",
    
    },
    {
        h1: "Haunted Museum",
        p: "Join us for a spirited adventure through Zak Bagans’ The Haunted Museum in Las Vegas, as seen on the Travel Channel’s Ghost Adventures! See original collectibles from haunted sites and hear the bone-chilling stories of the paranormal activity that surrounds them.",
    a: "https://thehauntedmuseum.com/",
    
    },
    {
        h1: "Ace Hotel New Orleans",
        p: "Home to well-appointed rooms, event spaces, a restaurant, rooftop bar and all-day café. Well-appointed rooms with breathing room. Custom furnishings, original art and more. Bike Ride to Marigny. By South Market District.",
    a: "https://acehotel.com/",
    
    },
    {
        h1: "Sheraton New Orleans Hotel",
        p: "Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center. Relax in our refined guest rooms and suites, which boast plush bedding, spacious work areas, modern technology and floor-to-ceiling windows overlooking the French Quarter and the Mississippi River. Upgrade your stay with premium Sheraton Club Lounge access or reboot in our fully-equipped Sheraton Fitness Center. Kick start your day in New Orleans at Starbucks® in our atrium lobby or wind down with refreshing cocktails and local cuisine at Pelican Bar. A leading meeting and events destination in downtown New Orleans, our hotel features 105,000 square feet of flexible venue space, including several expansive ballrooms.",
    a: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
    
    },
    {
        h1: "The Ritz-Carlton New Orleans",
        p: "Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.",
    a: "https://www.ritzcarlton.com/en/hotels/new-orleans",
    
    },
    {
        h1: "Premium parking-402",
        p: "Daily/Monthly parking at 300 N Peters St, New Orleans, LA. Reserve online or drive up, park and pay via mobile phone.",
    a: "https://www.premiumparking.com/P402",
    
    },
    {
        h1: "Museum Of Death",
        p: "Our site is currently undergoing some renovations to ensure that it can properly be accessed and navigated by all interested parties. We sincerely apologize to anybody that may have encountered any difficulties previously- and to correct that we are working on upgrading the entire website to provide and ensure full ADA Compliance.",
    a: "http://www.museumofdeath.net/",
    
    },
    {
        h1: "Louisiana Children Museum",
        p: "Louisiana byder lige nu med udstillingerne Det Kolde Øje & August Sander på en fantastisk tidsrejse tilbage til Tyskland i 1920’erne. Oplev også den første udstilling i Skandinavien med amerikanske Richard Princetræd ind i Alex Da Cortes syrede og sanselige univers og nyd mesterværker fra samlingen af bl.a. Yves Klein og Andy Warhol.",
    a: "https://louisiana.dk/",
    
    },
]
function modalcards(i){
  document.querySelector(".modal-body").innerHTML = cards[i].p;
 document.getElementById("exampleModalLabel").innerText = cards[i].h1;
   document.getElementById("imgcard").href = cards[i].a;

}