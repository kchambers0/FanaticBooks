# FanaticBooks

Hey guys. I wanted to quickly give a shout out to a couple of choices I made in my isolated environment. 

## Font

So I went with Helvetica, which is already divisive. I'm still not sure what font was supposed to be used. It looks like Helvetica is a bit too fat. Even at lower font weights, it still seemed a bit wider than the mock. I tried a few others but I felt like nothing fit.

## Icons & Images

I would up using Google material icons for this, as it's one of the quick and easy icon font libraries available. I almost thought Angular would've already included it. In any case, some of the icons in the mock didn't quite have an analogous entry in the material set, so I went with what's closest. I figure these would usually be provided by creative anyway.

By the way, hopefully the image quality itself isn't too bad. I don't really own Photoshop or any equivalent. I wound up cropping things out from a jpg I exported from the pdf. 

## CSS

So I wound up putting my some of the base styles and color variables into the main app.less file, and importing it to the other less files. It seems a bit redundant, but the compiler would balk at me whenever it would happen. Maybe there's a better place for this, I dunno. 

There were some styles as well I put into the index.html file. I wanted reset margin and padding on everything, including the body, but it didn't look like any of the less files could touch it for some reason. Seems as though they're scoped to their particular component. So I put these styles there. Feels a bit like a hack, but works perfectly fine.

I also placed an image of the mock behind the page here, to best capture the ratios and distances of everything. Again, no Photoshop to really leverage the ruler tool, so if some sizes are a tad off, there's why.

The .container elements are sized by percents at the moment. With a little more time I'd usually give them strict widths at a few different screen widths. I think that's pretty standard with bootstrap and the like. But for now they're at percents. 

## Details page & Carousel

The details page remains largely unstyled. There's not much to display, really, other than the quick dataset I whipped up. There's usually a lot more going on with these pages, buttons and recommends, but I've got nothing to work off of really. I know you mentioned design in the phone call, so I'd have liked to have fleshed this out more, but I'm a bit burnt out at the moment.

The carousel, too, was something I'd have wanted to suture up, but I just dropped an image in for it for the time being. I'd probably code it similarly to this thing I did the other day. Not sure if it got sent initially. It's meant to be a mobile layout actually, so check it out on your phone! I might look a bit stretched on desktop. http://monmouth.media/swipe/swipe.html

## Conclusion

All in all it was a fun exercise though. I just might add some more features to it to flesh it out a bit more. It'll turn out to be a nice portfolio type piece either way. Anyway, I'm beat so I'm gonna hit the sack. Catch ya later!