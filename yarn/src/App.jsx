import 'bootstrap/dist/css/bootstrap.css';
import NavbarC from './components/NavbarC';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Patterns from './pages/Patterns';
import Guides from './pages/Guides';
import Share from './pages/Share';
import Pattern from './pages/Pattern'
import FAQ from './pages/FAQ';

const patternData = [
  {
    id: 1,
    title: "Peter the Penguin",
    type: "Animal",
    difficulty: "Easy",
    sewing: "Low",
    length: "1 hour",
    yarn: "Jumbo (7)",
    size: "Small", 
    image: "/images/penguin.png",
    tools: [
      "<b>Hook:</b> 6.5mm and 8mm", 
      "<b>Yarn:</b> Any colour (C), white (W), yellow (Y)",
      "<b>Safety Eyes:</b> 14mm",
      "<b>Stuffing</b>",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Body</b>",
      "Start with colour (C)",
      "Use 8mm hook",
      "<b>R1:</b> 8sc in a MR (8)",
      "<b>R2:</b> 8inc (16)",
      "<b>R3:</b> ( sc, inc ) x 8 (24)",
      "<b>R4:</b> C( 4sc ), W( 2sc ), C( 2sc ), W( 2sc ), C( 14sc ) (24)",
      "<b>R5-8:</b> C( 3sc ), W( 8sc ), C( 13sc ) (24)",
      "Secure safety eyes between R6 and R7, 3 stitches in between",
      "<b>R9:</b> C( 2sc, dec ), W( 2sc, dec, 2sc ), C( dec, ( 2sc, dec ) x 3 ) (18)",
      "Colour (C) only from now on",
      "<b>R10:</b> ( sc, dec ) x 6 (12)",
      "<b>R11:</b> 6dec (6)",
      "<br />",
      "<b>Wings</b>",
      "Start with colour (C)",
      "Use 8mm hook",
      "<b>R1:</b> Ch4",
      "<b>R2:</b> 3sc",
      "<b>R3:</b> Ch1, sc, slst",
      "Sew on R7",
      "<br />",
      "<b>Feet</b>",
      "Start with yellow (Y)",
      "Use 6.5mm hook",
      "<b>R1:</b> 6sc in a MR",
      "<br />",
      "<b>Beak</b>",
      "Embroider with yellow (Y)",
      "<br />",
      "<b>Enjoy your new penguin!</b>"
    ]
  },
  {
    id: 2,
    title: "Star Coin",
    type: "Object",
    difficulty: "Medium",
    sewing: "Medium",
    length: "1 hour",
    yarn: "Medium (4)",
    size: "Small", 
    image: "/images/coin.png",
    tools: [
      "<b>Hook:</b> 3.5mm", 
      "<b>Yarn:</b> Yellow and Gold",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Coin</b> (make 2)",
      "Start with yellow yarn",
      "* means repeat that stitch until the end of the round",
      "() means work in the same stitch",
      "<b>R1:</b> In a magic ring, sc 5, rev slst, ch 1 (5)",
      "<b>R2:</b> sc inc*, rev slst, ch 1 (10)",
      "<b>R3:</b> sc inc, sc*, rev slst, ch 1 (15)",
      "<b>R4:</b> [sc, ch 4, hdc in second ch, dc, tr, sk 2]x5, rev slst (5 star points)",
      "Finish off",
      "Continue with gold yarn",
      "<b>R5:</b> sk 4, bl all [sc, hdc, dc, tr 3, dc, hdc]x5, rev slst (40)",
      "Continue with yellow yarn. Ch2 to start.",
      "<b>R5:</b> R1: dc 3, dc inc* (50)",
      "Finish off. Leave an approx 36in. tail on the first coin. Then sew the two coins together.",
      "<b>Enjoy your new star coin!</b>"
    ]
  },
  {
    id: 3,
    title: "Dangling Curly Plant",
    type: "Plant",
    difficulty: "Easy",
    sewing: "Medium",
    length: "2 hours",
    yarn: "Bulky (5)",
    size: "Medium", 
    image: "/images/plant.png",
    tools: [
      "<b>Hook:</b> 5.5mm", 
      "<b>Yarn:</b> Green and Brown",
      "<b>Stuffing</b>",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Soil Pot:</b>",
      "Start with brown yarn",
      "<b>R1:</b> 6sc in a magic ring (6)",
      "<b>R2:</b> 6inc (12)",
      "<b>R3:</b> (sc, inc)x6 (18)",
      "<b>R4:</b> (2sc, inc)x6 (24)",
      "<b>R5-9:</b> 24sc (24 for 5 rounds)",
      "<b>R10:</b> (4sc, dec)x4 (20)",
      "<b>R11:</b> 20sc (20)",
      "Slip stitch, fasten off and leave a long tail for sewing. Do not stuff yet.",
      "<br />",
      "<b>Curly Leaves:</b> (make 10 or as many as you want)",
      "Start with green yarn",
      "<b>R1:</b> Chain number for desired length and leave 4in tail for attaching to the soil",
      "<b>R2:</b> 3sc in the 2nd chain fom your hook and 3sc in each chain after until the end of the chain",
      "The curl will start to form, you may need to use your fingers to twist it into shape",
      "Finish off with about a 4in tail for attaching to the soil",
      "Repeat pattern for Curly Leaves with different starting lengths until you have your desired amount.",
      "Sew all of the leaves onto the soil pot using both tail ends of each leaf and secure with a knot inside the pot",
      "Stuf the soil pot, fasten off, and sew closed.",
      "Display your new dangling curly plant!"
    ]
  },
  {
    id: 4,
    title: "Loaf Cat",
    type: "Animal",
    difficulty: "Easy",
    sewing: "Low",
    length: "3 hours",
    yarn: "Super Bulky (6)",
    size: "Medium", 
    image: "/images/loafcat.png",
    tools: [
      "<b>Hook:</b> 6.5mm", 
      "<b>Yarn:</b> Any Colour and Black",
      "<b>Safety Eyes:</b> 14mm",
      "<b>Stuffing</b>",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Body</b>",
      "Start with Colour",
      "<b>R1:</b> 8sc in a magic ring (8)",
      "<b>R2:</b> 8inc (16)",
      "<b>R3:</b> (sc, inc)x8 (24)",
      "<b>R4:</b> (2sc, inc)x8 (32)",
      "<b>R5:</b> (3sc, inc)x8 (40)",
      "<b>R6:</b> 17sc, flo sc, working in the flo of the next stitch (dc, ch 1, dc), flo sc, 4sc, flo sc, working in the flo of the next stitch (dc, ch 1, dc), flo sc, 13sc (38sc and 2 ears)",
      "<b>R7:</b> 17sc, 1 sc in each of the 3 back loops behind the ear, 4sc, 1 sc in each of the 3 back loops behind the ear, 13sc (40)",
      "<b>R8:</b> 40sc (40)",
      "<b>R9:</b> bobble st, 4sc, bobble st, sc around until you reach your first foot (38sc, 2 bobbles)",
      "Attach safety eyes between rows 3 and 4",
      "<b>R10-15:</b> 40sc (40 for 6 rows)",
      "<b>R16:</b> bobble st, 4sc, bobble st, sc around until you reach your first foot (38sc, 2 bobbles)",
      "<b>R17:</b> 40sc (40)",
      "<b>R18:</b> (3sc, dec)x8 (32)",
      "Begin stuffing your plushie",
      "<b>R19:</b> (2sc, dec)x8 (24)",
      "<b>R20:</b> (sc, dec) (16)",
      "<b>R21:</b> 8dec (8)",
      "Finish stuffing, sew the end closed and embroider the whiskers and nose on using the black yarn",
      "<br />",
      "<b>Tail</b>",
      "Start with Colour",
      "<b>R1:</b> 7sc in a magic ring (7)",
      "<b>R2-5:</b> 7sc (7 for 4 rounds)",
      "Fasten off and leave a long tail for sewing. Sew the tail onto R17 of the body.",
      "Show off your new adorable loaf cat!"
    ]
  },
  {
    id: 5,
    title: "Tulip Pillow",
    type: "Object",
    difficulty: "Easy",
    sewing: "None",
    length: "4 hours",
    yarn: "Jumbo (7)",
    size: "Large", 
    image: "/images/tulippillow.png",
    tools: [
      "<b>Hook:</b> 8mm", 
      "<b>Yarn:</b> Yellow and Green",
      "<b>Stuffing</b>",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Leaf</b> (make 2)",
      "Start with Green",
      "<b>R1:</b> 5sc in a magic ring (5)",
      "<b>R2:</b> sc around (5)",
      "<b>R3:</b> 5inc (10)",
      "<b>R4-6:</b> sc around for 3 rounds (10)",
      "<b>R7:</b> (sc,inc)x5 (15)",
      "<b>R8:</b> sc around (15)",
      "<b>R9:</b> (2sc,inc)x5 (20)",
      "Stuff petals",
      "<b>R10:</b> sc around (20)",
      "<b>R11:</b> (2sc,dec)x5 (15)",
      "<b>R12:</b> (sc,dec)x5 (10)",
      "Fasten off, weave in the tail",
      "<br>",
      "<b>Tulip</b>",
      "<b>In yellow</b>",
      "<b>Make 3 of steps 1-5</b>",
      "<b>R1:</b> 6 sc in a magic ring (6)",
      "<b>R2:</b> inc x 6 (12)",
      "<b>R3:</b> (sc, inc) x 6 (18)",
      "<b>R4-5:</b> sc around for 2 rounds (18)",
      "Fo on the first two bumps and leave your hook on the third",
      "Now we will crochet the 3 bumps together to start our flower",
      "<b>R6:</b> With your 3rd bump still on the hook, do a slst onto any stitch on the 2nd bump (photo #1). Do 8 sc on the 2nd bump, do a slst on the 1st bump to attach it, do 17 sc on the 1st bump, do 9 sc on the 2nd bump & 18 sc on the 3rd bump (54)",
      "There will be a small hole between the bumps which you will stitch closed later, but for now just continue to crochet until instructed to tie it closed.",
      "<b>R7-14:</b> sc around for 8 rounds (54)",
      "<b>R15:</b> (7 sc, dec) x 6 (48)",
      "<b>R16-18:</b> sc around for 3 rounds (48)",
      "<b>R19:</b> (6 sc, dec) x 6 (42)",
      "<b>R20-21:</b> sc around for 2 rounds (42)",
      "<b>R22:</b> (5 sc, dec) x 6 (36)",
      "<b>R23:</b> (4 sc, dec) x 6 (30)",
      "Stuff flower (be careful not to overstuff as you want to be able to lay on the pillow)",
      "<b>R24:</b> (3 sc, dec) x 6 (24)",
      "<b>R25:</b> (2 sc, dec) x 6 (18)",
      "Change color to green",
      "<b>R26-39:</b> sc around for 14 rounds (18)",
      "Stuff the stem as you go",
      "We will attach the leaves in this next round using the no-sew method",
      "<b>R40:</b> sc, 5 sc to attach the 1st leaf to the stem, 4 sc, 5 sc to attach the 2nd leaf to the stem, 3 sc (18)",
      "<b>R41:</b> (sc, dec) x 6 (12)",
      "<b>R42:</b> dec x 6 to close",
      "Fo, weave in tail",
      "<br>",
      "<b>Leaf</b> (make 2)",
      "Start with green",
      "<b>R1:</b> 5 sc in a magic ring (5)",
      "<b>R2:</b> sc around (5)",
      "<b>R3:</b> 5 inc (10)",
      "<b>R4-6:</b> sc around for 3 rounds (10)",
      "<b>R7:</b> (sc, inc) x 5 (15)",
      "<b>R8:</b> sc around (15)",
      "<b>R9:</b> (2 sc, inc) x 5 (20)",
      "Stuff petals",
      "<b>R10:</b> sc around (20)",
      "<b>R11:</b> (2 sc, dec) x 5 (15)",
      "<b>R12:</b> (sc, dec) x 5 (10)",
      "Fasten off, weave in the tail",
      "Show off your new tulip pillow!"
    ]
  },
]

function App() {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<Patterns patternData={patternData} />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/share" element={<Share />} />
        <Route path="/pattern/:id" element={<Pattern patternData={patternData} />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
