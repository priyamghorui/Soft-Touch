import "./css/Heading.css";
import food_chart from "./photos/babyFoodchart.jpg";
function Baby_data(params) {
  console.log(params);
  if (params.name === "Food Chart") {
    return (
      <div className="card m-5">
        <div className="card-body">
          <img src={food_chart} alt="" className="w-100 p-3" />
        </div>
      </div>
    );
  } else if (params.name === "Growth Milestone") {
    return (
      <div className="card m-5">
        <div className="card-body"></div>
      </div>
    );
  } else {
    return (
      <div className="card m-5">
        <div className="card-body">
          <div id="details">
            <div className="qna">
              <div className="questions">
                <p>Getting Help After the Birth</p>
              </div>
              <div className="answers">
                <p>
                  Consider getting help during this time, which can be very
                  hectic and overwhelming. While in the hospital, talk to the
                  experts around you. Many hospitals have feeding specialists or
                  lactation consultants who can help you get started
                  <a href="https://kidshealth.org/en/parents/feednewborn.html">
                    nursing or bottle-feeding
                  </a>
                  . Nurses also are a great resource to show you how to hold,
                  burp, change, and care for your baby.
                </p>
                <p>
                  For in-home help, you might want to hire a baby nurse,
                  postpartum doula, or a responsible neighborhood teen to help
                  you for a short time after the birth. Your doctor or the
                  hospital can help you find information about in-home help, and
                  might make a referral to home health agencies.
                </p>
                <p>
                  Relatives and friends often want to help too. Even if you
                  disagree on certain things, don't dismiss their experience.
                  But if you don't feel up to having guests or you have other
                  concerns, don't feel guilty about placing restrictions on
                  visitors.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>Handling a Newborn</p>
              </div>
              <div className="answers">
                <p>
                  If you haven't spent a lot of time around newborns, their
                  fragility may be intimidating. Here are a few basics to
                  remember:
                </p>
                <ul>
                  <li>
                    <b className="emphasis">
                      <a href="https://kidshealth.org/en/parents/hand-washing.html">
                        Wash your hands
                      </a>
                      (or use a hand sanitizer) before handling your baby.
                    </b>
                    Newborns don't have a strong
                    <a href="https://kidshealth.org/en/parents/immune.html">
                      immune system
                    </a>
                    yet, so they're at risk for infection. Make sure that
                    everyone who handles your baby has clean hands.
                  </li>
                  <li>
                    <b className="emphasis">Support your baby's head and neck.</b>{" "}
                    Cradle the head when carrying your baby and support the head
                    when carrying the baby upright or when you lay your baby
                    down.
                  </li>
                  <li>
                    <b className="emphasis">
                      Never shake your newborn, whether in play or in
                      frustration.
                    </b>
                    <a href="https://kidshealth.org/en/parents/shaken.html">
                      Shaking
                    </a>
                    can cause bleeding in the brain and even death. If you need
                    to wake your infant, don't do it by shaking — instead,
                    tickle your baby's feet or blow gently on a cheek.
                  </li>
                  <li>
                    <b className="emphasis">
                      Make sure your baby is securely fastened into the
                      <a href="https://kidshealth.org/en/parents/products-seats.html">
                        carrier, stroller, or car seat
                      </a>
                      .
                    </b>
                    Limit any activity that could be too rough or bouncy.
                  </li>
                  <li>
                    <b className="emphasis">
                      Remember that your newborn is not ready for rough play
                    </b>
                    , such as being jiggled on the knee or thrown in the air.
                  </li>
                </ul>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>Bonding and Soothing</p>
              </div>
              <div className="answers">
                <p>
                  <a href="https://kidshealth.org/en/parents/bonding.html">
                    Bonding
                  </a>
                  , probably one of the most pleasurable parts of infant care,
                  happens during the sensitive time in the first hours and days
                  after birth when parents make a deep connection with their
                  infant. Physical closeness can promote an emotional
                  connection.
                </p>
                <p>
                  For infants, the attachment contributes to their emotional
                  growth, which also affects their development in other areas,
                  such as physical growth. Another way to think of bonding is
                  "falling in love" with your baby. Children thrive from having
                  a parent or other adult in their life who loves them
                  unconditionally.
                </p>
                <p>
                  Begin bonding by cradling your baby and gently stroking him or
                  her in different patterns. Both you and your partner can also
                  take the opportunity to be "skin-to-skin," holding your
                  newborn against your own skin while feeding or cradling.
                </p>
                <p>
                  Babies, especially premature babies and those with medical
                  problems, may respond to infant massage. Certain types of
                  massage may enhance bonding and help with infant growth and
                  development. Many books and videos cover infant massage — ask
                  your doctor for recommendations. Be careful, however — babies
                  are not as strong as adults, so massage your baby gently.
                </p>
                <p>
                  Babies usually love vocal sounds, such as talking, babbling,
                  singing, and cooing. Your baby will probably also love
                  listening to music. Baby rattles and musical mobiles are other
                  good ways to stimulate your infant's hearing. If your little
                  one is being fussy, try singing, reciting poetry and nursery
                  rhymes, or
                  <a href="https://kidshealth.org/en/parents/reading-babies.html">
                    reading
                  </a>
                  aloud as you sway or rock your baby gently in a chair.
                </p>
                <p>
                  Some babies can be unusually sensitive to touch, light, or
                  sound, and might startle and cry easily, sleep less than
                  expected, or turn their faces away when someone speaks or
                  sings to them. If that's the case with your baby, keep noise
                  and light levels low to moderate.
                </p>
                <p>
                  <b className="emphasis">Swaddling</b>, which works well for some
                  babies during their first few weeks, is another soothing
                  technique first-time parents should learn. Proper swaddling
                  keeps a baby's arms close to the body while allowing for some
                  movement of the legs. Not only does swaddling keep a baby
                  warm, but it seems to give most newborns a sense of security
                  and comfort. Swaddling also may help limit the startle reflex,
                  which can wake a baby.
                </p>
                <p>Here's how to swaddle a baby:</p>
                <ul>
                  <li>
                    Spread out the receiving blanket, with one corner folded
                    over slightly.
                  </li>
                  <li>
                    Lay the baby face-up on the blanket with his or her head
                    above the folded corner.
                  </li>
                  <li>
                    Wrap the left corner over the body and tuck it beneath the
                    back of the baby, going under the right arm.
                  </li>
                  <li>
                    Bring the bottom corner up over the baby's feet and pull it
                    toward the head, folding the fabric down if it gets close to
                    the face. Be sure not to wrap too tightly around the hips.
                    Hips and knees should be slightly bent and turned out.
                    Wrapping your baby too tightly may increase the chance of
                    <a href="https://kidshealth.org/en/parents/ddh.html">
                      hip dysplasia
                    </a>
                    .
                  </li>
                  <li>
                    Wrap the right corner around the baby, and tuck it under the
                    baby's back on the left side, leaving only the neck and head
                    exposed. To make sure your baby is not wrapped too tight,
                    make sure you can slip a hand between the blanket and your
                    baby's chest, which will allow comfortable breathing. Make
                    sure, however, that the blanket is not so loose that it
                    could become undone.
                  </li>
                  <li>
                    Babies should not be swaddled after they're 2 months old. At
                    this age, some babies can roll over while swaddled, which
                    increases their risk of sudden infant death syndrome (SIDS).
                  </li>
                </ul>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>All About Diapering</p>
              </div>
              <div className="answers">
                <p>
                  You'll probably decide before you bring your baby home whether
                  you'll use cloth or disposable diapers. Whichever you use,
                  your little one will dirty diapers about 10 times a day, or
                  about 70 times a week.
                </p>
                <p>
                  Before
                  <a href="https://kidshealth.org/en/parents/diapering.html">
                    diapering your baby
                  </a>
                  , make sure you have all supplies within reach so you won't
                  have to leave your infant unattended on the changing table.
                  You'll need:
                </p>
                <ul>
                  <li>a clean diaper</li>
                  <li>fasteners (if cloth prefold diapers are used)</li>
                  <li>diaper ointment</li>
                  <li>
                    <p>
                      diaper wipes (or a container of warm water and a clean
                      washcloth or cotton balls) After each bowel movement or if
                      the diaper is wet, lay your baby on his or her back and
                      remove the dirty diaper. Use the water, cotton balls, and
                      washcloth or the wipes to gently wipe your baby's genital
                      area clean. When removing a boy's diaper, do so carefully
                      because exposure to the air may make him urinate. When
                      wiping a girl, wipe her bottom from front to back to avoid
                      a
                      <a href="https://kidshealth.org/en/parents/urinary.html">
                        urinary tract infection (UTI)
                      </a>
                      . To prevent or heal a rash, apply ointment. Always
                      remember to wash your hands thoroughly after changing a
                      diaper.
                    </p>
                    <p>
                      <a href="https://kidshealth.org/en/parents/diaper-rash.html">
                        Diaper rash
                      </a>
                      is a common concern. Typically the rash is red and bumpy
                      and will go away in a few days with warm baths, some
                      diaper cream, and a little time out of the diaper. Most
                      rashes happen because the baby's skin is sensitive and
                      becomes irritated by the wet or poopy diaper.
                    </p>
                  </li>
                </ul>
                <p>To prevent or heal diaper rash, try these tips:</p>
                <ul>
                  <li>
                    Change your baby's diaper often, and as soon as possible
                    after bowel movements.
                  </li>
                  <li>
                    Gently clean the area with mild soap and water (wipes
                    sometimes can be irritating), then apply a very thick layer
                    of diaper rash or "barrier" cream. Creams with zinc oxide
                    are preferred because they form a barrier against moisture.
                  </li>
                  <li>
                    If you use cloth diapers, wash them in dye- and
                    fragrance-free detergents.
                  </li>
                  <li>
                    Let the baby go undiapered for part of the day. This gives
                    the skin a chance to air out.
                  </li>
                </ul>
                <p>
                  If the diaper rash continues for more than 3 days or seems to
                  be getting worse, call your doctor — it may be caused by a
                  fungal infection that requires a prescription.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>Bathing Basics</p>
              </div>
              <div className="answers">
                <p>You should give your baby a sponge bath until:</p>
                <ul>
                  <li>
                    the umbilical cord falls off and the navel heals completely
                    (1–4 weeks)
                  </li>
                  <li>the circumcision heals (1–2 weeks)</li>
                </ul>
                <p>
                  A bath two or three times a week in the first year is fine.
                  More frequent bathing may be drying to the skin.
                </p>
                <p>Have these items ready before bathing your baby:</p>
                <ul>
                  <li>a soft, clean washcloth</li>
                  <li>mild, unscented baby soap and shampoo</li>
                  <li>a soft brush to stimulate the baby's scalp</li>
                  <li>towels or blankets</li>
                  <li>a clean diaper</li>
                  <li>clean clothes</li>
                </ul>
                <p>
                  <b className="emphasis">Sponge baths.</b> For a sponge bath,
                  select a safe, flat surface (such as a changing table, floor,
                  or counter) in a warm room. Fill a sink, if nearby, or bowl
                  with warm (not hot!) water. Undress your baby and wrap him or
                  her in a towel. Wipe your infant's eyes with a washcloth (or a
                  clean cotton ball) dampened with water only, starting with one
                  eye and wiping from the inner corner to the outer corner. Use
                  a clean corner of the washcloth or another cotton ball to wash
                  the other eye. Clean your baby's nose and ears with the damp
                  washcloth. Then wet the cloth again and, using a little soap,
                  wash his or her face gently and pat it dry.
                </p>
                <p>
                  Next, using baby shampoo, create a lather and gently wash your
                  baby's head and rinse. Using a wet cloth and soap, gently wash
                  the rest of the baby, paying special attention to creases
                  under the arms, behind the ears, around the neck, and in the
                  genital area. Once you have washed those areas, make sure they
                  are dry and then diaper and dress your baby.
                </p>

                <p>
                  <b className="emphasis">Tub baths.</b> When your baby is ready for
                  tub baths, the first baths should be gentle and brief. If he
                  or she becomes upset, go back to sponge baths for a week or
                  two, then try the bath again.
                </p>
                <p>In addition to the supplies listed above, add:</p>
                <ul>
                  <li>
                    an infant tub with 2 to 3 inches of warm — not hot! — water
                    (to test the water temperature, feel the water with the
                    inside of your elbow or wrist). An infant tub is a plastic
                    tub that can fit in the bathtub; it's a better size for
                    babies and makes bathing easier to manage.
                  </li>
                </ul>
                <p>
                  Undress your baby and then place him or her in the water
                  immediately, in a warm room, to prevent chills. Make sure the
                  water in the tub is no more than 2 to 3 inches deep, and that
                  the water is no longer running in the tub. Use one of your
                  hands to support the head and the other hand to guide the baby
                  in feet-first. Speaking gently, slowly lower your baby up to
                  the chest into the tub.
                </p>
                <p>
                  Use a washcloth to wash his or her face and hair. Gently
                  massage your baby's scalp with the pads of your fingers or a
                  soft baby hairbrush, including the area over the fontanelles
                  (soft spots) on the top of the head. When you rinse the soap
                  or shampoo from your baby's head, cup your hand across the
                  forehead so the suds run toward the sides and soap doesn't get
                  into the eyes. Gently wash the rest of your baby's body with
                  water and a small amount of soap.
                </p>
                <p>
                  Throughout the bath, regularly pour water gently over your
                  baby's body so he or she doesn't get cold. After the bath,
                  wrap your baby in a towel immediately, making sure to cover
                  his or her head. Baby towels with hoods are great for keeping
                  a freshly washed baby warm.
                </p>
                <p>
                  While bathing your infant, <b className="emphasis">never</b> leave
                  the baby alone. If you need to leave the bathroom, wrap the
                  baby in a towel and take him or her with you.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>Circumcision and Umbilical Cord Care</p>
              </div>
              <div className="answers">
                <p>
                  Immediately after
                  <a href="https://kidshealth.org/en/parents/circumcision.html">
                    circumcision
                  </a>
                  , the tip of the penis is usually covered with gauze coated
                  with petroleum jelly to keep the wound from sticking to the
                  diaper. Gently wipe the tip clean with warm water after a
                  diaper change, then apply petroleum jelly to the tip so it
                  doesn't stick to the diaper. Redness or irritation of the
                  penis should heal within a few days, but if the redness or
                  swelling increases or if pus-filled blisters form, infection
                  may be present and you should call your baby's doctor
                  immediately.
                </p>
                <p>
                  Umbilical cord care in newborns is also important. Some
                  doctors suggest swabbing the area with rubbing alcohol until
                  the cord stump dries up and falls off, usually in 10 days to 3
                  weeks, but others recommend leaving the area alone. Talk to
                  your child's doctor to see what he or she prefers.
                </p>
                <p>
                  An infant's navel area shouldn't be submerged in water until
                  the cord stump falls off and the area is healed. Until it
                  falls off, the cord stump will change color from yellow to
                  brown or black — this is normal. Call your doctor if the navel
                  area looks red or if a foul odor or discharge develops.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>Feeding and Burping Your Baby</p>
              </div>
              <div className="answers">
                <p>
                  Whether feeding your newborn by
                  <a href="https://kidshealth.org/en/parents/breast-bottle-feeding.html">
                    breast or a bottle
                  </a>
                  , you may be stumped as to how often to do so. Generally, it's
                  recommended that babies be fed on demand — whenever they seem
                  hungry. Your baby may cue you by crying, putting fingers in
                  his or her mouth, or making sucking noises.
                </p>
                <p>
                  A newborn baby needs to be fed every 2 to 3 hours. If you're
                  breastfeeding, give your baby the chance to nurse about 10–15
                  minutes at each breast. If you're formula-feeding, your baby
                  will most likely take about 2–3 ounces (60–90 milliliters) at
                  each feeding.
                </p>
                <p>
                  Some newborns may need to be awakened every few hours to make
                  sure they get enough to eat. Call your baby's doctor if you
                  need to wake your newborn often or if your baby doesn't seem
                  interested in eating or sucking.
                </p>
                <p>
                  If you're formula-feeding, you can easily monitor if your baby
                  is getting enough to eat, but if you're breastfeeding, it can
                  be a little trickier. If your baby seems satisfied, produces
                  about six wet diapers and several stools a day, sleeps well,
                  and is gaining weight regularly, then he or she is probably
                  eating enough.
                </p>
                <p>
                  Another good way to tell if your baby is getting milk is to
                  notice if your breasts feel full before feeding your baby and
                  less full after feeding. Talk to your doctor if you have
                  concerns about your child's
                  <a href="https://kidshealth.org/en/parents/grownewborn.html">
                    growth
                  </a>
                  or feeding schedule.
                </p>
                <p>
                  Babies often swallow air during feedings, which can make them
                  fussy. To help prevent this, burp your baby often. Try burping
                  your baby every 2–3 ounces (60–90 milliliters) if you
                  bottle-feed, and each time you switch breasts if you
                  breastfeed.
                </p>
                <p>
                  If your baby tends to be gassy, has
                  <a href="https://kidshealth.org/en/parents/gerd-reflux.html">
                    gastroesophageal reflux
                  </a>
                  , or seems fussy during feeding, try burping your little one
                  after every ounce during bottle-feeding or every 5 minutes
                  during breastfeeding.
                </p>
                <p>Try these burping tips:</p>
                <ul>
                  <li>
                    Hold your baby upright with his or her head on your
                    shoulder. Support your baby's head and back while gently
                    patting the back with your other hand.
                  </li>
                  <li>
                    Sit your baby on your lap. Support your baby's chest and
                    head with one hand by cradling your baby's chin in the palm
                    of your hand and resting the heel of your hand on your
                    baby's chest (be careful to grip your baby's chin — not
                    throat. Use the other hand to gently pat your baby's back.
                  </li>
                  <li>
                    Lay your baby face-down on your lap. Support your baby's
                    head, making sure it's higher than his or her chest, and
                    gently pat or rub his or her back.
                  </li>
                </ul>
                <p>
                  If your baby doesn't burp after a few minutes, change the
                  baby's position and try burping for another few minutes before
                  feeding again. Always burp your baby when feeding time is
                  over, then keep him or her in an upright position for at least
                  10–15 minutes to avoid spitting up.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>Sleeping Basics</p>
              </div>
              <div className="answers">
                <p>
                  As a new parent, you may be surprised to learn that your
                  newborn, who seems to need you every minute of the day,
                  actually
                  <a href="https://kidshealth.org/en/parents/sleepnewborn.html">
                    sleeps
                  </a>
                  about 16 hours or more!
                </p>
                <p>
                  Newborns typically sleep for periods of 2–4 hours. Don't
                  expect yours to sleep through the night — the digestive system
                  of babies is so small that they need nourishment every few
                  hours and should be awakened if they haven't been fed for 4
                  hours (or more often if your doctor is concerned about weight
                  gain).
                </p>
                <p>
                  When can you expect your baby to sleep through the night? Many
                  babies sleep through the night (between 6–8 hours) at 3 months
                  of age, but if yours doesn't, it's not a cause for concern.
                  Like adults, babies must develop their own sleep patterns and
                  cycles, so if your newborn is gaining weight and appears
                  healthy, don't despair if he or she hasn't slept through the
                  night at 3 months.
                </p>
                <p>
                  It's important to <b className="emphasis"> always</b> place babies
                  on their backs to sleep to reduce the risk of
                  <a href="https://kidshealth.org/en/parents/sids.html">
                    SIDS (sudden infant death syndrome)
                  </a>
                  . Other safe sleeping practices include: not using blankets,
                  quilts, sheepskins, stuffed animals, and pillows in the crib
                  or bassinet (these can suffocate a baby); and sharing a
                  bedroom (but
                  <b className="emphasis"> not</b> a
                  <a href="https://kidshealth.org/en/parents/cosleeping.html">
                    {" "}
                    bed
                  </a>
                  ) with the parents for the first 6 months to 1 year. Also be
                  sure to alternate the position of your baby's head from night
                  to night (first right, then left, and so on) to prevent the
                  development of a
                  <a href="https://kidshealth.org/en/parents/positional-plagiocephaly.html">
                    flat spot
                  </a>
                  on one side of the head.
                </p>
                <p>
                  Many newborns have their days and nights "mixed up." They tend
                  to be more awake and alert at night, and more sleepy during
                  the day. One way to help them is to keep stimulation at night
                  to a minimum. Keep the lights low, such as by using a
                  nightlight. Reserve talking and playing with your baby for the
                  daytime. When your baby wakes up during the day, try to keep
                  him or her awake a little longer by talking and playing.
                </p>
                <p>
                  Even though you may feel anxious about handling a newborn, in
                  a few short weeks you'll develop a routine and be parenting
                  like a pro! If you have questions or concerns, ask your doctor
                  to recommend resources that can help you and your baby grow
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Baby_data;
