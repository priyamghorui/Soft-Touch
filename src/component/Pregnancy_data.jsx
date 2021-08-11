import { Link, NavLink } from "react-router-dom";
import "./css/Heading.css";

function Pregnancy_data(params) {
  console.log(params);
  if (params.name === "Third Trimester (24 to 40 Weeks)") {
    return (
      <div className="card m-5">
        <div className="card-body">
          <div id="details">
            <div className="qna">
              <div className="questions">
                <p>
                  What happens to a woman’s body during the third trimester?
                </p>
              </div>
              <div className="answers">
                <p>
                  In the third trimester a woman may experience more aches,
                  pain, and swelling as she carries around her baby. A pregnant
                  woman may also begin to become anxious about her delivery.
                </p>
                <p>
                  Other events that occur during the third trimester include:
                </p>
                <ul>
                  <li>a lot of movement by the baby</li>
                  <li>
                    occasional random tightening of the uterus called
                    <a href="https://www.healthline.com/health/pregnancy/braxton-hicks-contractions-vs-real-contractions">
                      Braxton-Hicks
                    </a>
                    <a href="https://www.healthline.com/health/pregnancy/braxton-hicks-contractions-vs-real-contractions">
                      contractions
                    </a>
                    , which are completely random and usually not painful
                  </li>
                  <li>going to the bathroom more often</li>
                  <li>
                    <a href="https://www.healthline.com/symptom/heartburn">
                      heartburn
                    </a>
                  </li>
                  <li>swollen ankles, fingers, or face</li>
                  <li>
                    <a href="https://www.healthline.com/health/hemorrhoids">
                      hemorrhoids
                    </a>
                  </li>
                  <li>tender breasts that may leak watery milk</li>
                  <li>difficulty sleeping</li>
                </ul>
                <p>Call your doctor immediately if you experience:</p>
                <ul>
                  <li>
                    painful contractions of increasing intensity and frequency
                  </li>
                  <li>bleeding at any time</li>
                  <li>sudden decrease in activity by your baby</li>
                  <li>extreme swelling</li>
                  <li>rapid weight gain</li>
                </ul>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>What happens to the fetus during the third trimester?</p>
              </div>
              <div className="answers">
                <p>
                  At around
                  <a href="https://www.healthline.com/health/pregnancy/32-weeks-pregnant">
                    week 32
                  </a>
                  , your baby’s bones are fully formed. The baby can now open
                  and close its eyes and sense light. The baby’s body will begin
                  to store minerals like iron and calcium.
                </p>
                <p>
                  By
                  <a href="https://www.healthline.com/health/pregnancy/36-weeks-pregnant">
                    week 36
                  </a>
                  , the baby should be in a head down position. If the baby does
                  not move into this position, your doctor may try to move the
                  baby’s position or recommend that you give birth by a
                  <a href="https://www.healthline.com/health/c-section">
                    cesarean section
                  </a>
                  . This is when the doctor makes a cut in the mother’s belly
                  and uterus in order to deliver the baby.
                </p>
                <p>
                  After
                  <a href="https://www.healthline.com/health/pregnancy/37-weeks-pregnant">
                    week 37
                  </a>
                  , your baby is considered full term and its organs are ready
                  to function on their own. According to the
                  <a href="http://www.womenshealth.gov/pregnancy/you-are-pregnant/stages-of-pregnancy.html">
                    Office on Women’s Health
                  </a>
                  , the baby is now around 19 to 21 inches long and probably
                  weighs between 6 and 9 pounds.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>What can be expected at the doctor?</p>
              </div>
              <div className="answers">
                <p>
                  You will meet with your doctor more regularly during the third
                  trimester. Around
                  <a href="https://www.healthline.com/health/pregnancy/36-weeks-pregnant">
                    week 36
                  </a>
                  , your doctor may perform a
                  <a href="https://www.healthline.com/health/pregnancy/preventing-neonatal-infection">
                    Group B strep test
                  </a>
                  to test for a bacterium that can be very harmful to a baby.
                  Your doctor will give you antibiotics if you test positive.
                </p>
                <p>
                  Your doctor will check you progress with a vaginal exam. Your
                  cervix will become thinner and softer as you near your due
                  date in order to help the birth canal open during the birthing
                  process.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>How can you stay healthy during the third trimester?</p>
              </div>
              <div className="answers">
                <p>
                  It’s important to be aware of what to do and what to avoid as
                  your pregnancy continues in order to take care of yourself and
                  your developing baby.
                </p>
                <ul>
                  <li>Continue to take prenatal vitamins.</li>
                  <li>
                    Stay active unless you’re experiencing swelling or pain.
                  </li>
                  <li>Work out your pelvic floor by doing Kegel exercises.</li>
                  <li>
                    Eat a diet high in fruits, vegetables, low-fat forms of
                    protein, and fiber.
                  </li>
                  <li>Drink lots of water.</li>
                  <li>
                    Eat enough calories (about 300 more calories than normal per
                    day).
                  </li>
                  <li>Stay active with walking.</li>
                  <li>
                    Keep your teeth and gums healthy. Poor dental hygiene is
                    linked to premature labor.
                  </li>
                  <li>Get plenty of rest and sleep.</li>
                </ul>
                <p>What to avoid:</p>
                <ul>
                  <li>
                    strenuous exercise or strength training that could cause an
                    injury to your stomach
                  </li>
                  <li>alcohol</li>
                  <li>
                    caffeine (no more than one cup of coffee or tea per day)
                  </li>
                  <li>smoking</li>
                  <li>illegal drugs</li>
                  <li>raw fish or smoked seafood</li>
                  <li>
                    shark, swordfish, mackerel, or white snapper fish (they have
                    high levels of mercury)
                  </li>
                  <li>raw sprouts</li>
                  <li>
                    cat litter, which can carry a parasite that causes
                    toxoplasmosis
                  </li>
                  <li>unpasteurized milk or other dairy products</li>
                  <li>deli meats or hot dogs</li>
                  <li>
                    the following prescription drugs: isotretinoin (Accutane)
                    for acne, acitretin (Soriatane) for psoriasis, thalidomide
                    (Thalomid), and ACE inhibitors for high blood pressure
                  </li>
                  <li>
                    long car trips and airplane flights, if possible (after 34
                    weeks, airlines may not let you board the plane because of
                    the possibility of an unexpected delivery on the plane)
                  </li>
                </ul>
                <p>
                  If you must travel, stretch your legs and walk around at least
                  every hour or two.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>
                  What can you do to prepare for birth during the third
                  trimester?
                </p>
              </div>
              <div className="answers">
                <p>
                  If you haven’t done this already, make a decision on where you
                  plan to give birth to your child. These last-minute
                  preparations can help make delivery go more smoothly:
                </p>
                <ul>
                  <li>
                    Attend a prenatal className if you haven’t already. This is an
                    opportunity to learn about what to expect during labor and
                    the different options available for delivery.
                  </li>
                  <li>
                    Find a family member or friend who can care for your pets or
                    other children.
                  </li>
                  <li>
                    Cook some meals that can be frozen and eaten after you get
                    home with the baby.
                  </li>
                  <li>
                    Have an overnight bag packed and ready with items for you
                    and your baby.
                  </li>
                  <li>
                    Plan the route and mode of transportation for getting to the
                    hospital.
                  </li>
                  <li>Have a car seat set up in your vehicle.</li>
                  <li>
                    Develop a birth plan with your doctor. This may include
                    deciding who you want in your labor room for support,
                    concerns you have about hospital procedures, and
                    pre-registering with your insurance information.
                  </li>
                  <li>Arrange maternity leave with your employer.</li>
                  <li>
                    Have a crib ready for your baby and double-check that it’s
                    up to date and safe.
                  </li>
                  <li>
                    If you receive any “hand-me-down” equipment like cribs, and
                    strollers, make sure they conform to current government
                    safety standards. Purchase a new car seat.
                  </li>
                  <li>
                    Check that your smoke detectors and carbon monoxide
                    detectors in your home are working properly.
                  </li>
                  <li>
                    Have emergency numbers, including poison control, written
                    somewhere close to your phone.
                  </li>
                  <li>
                    Stock up on baby supplies, like diapers, wipes, and baby
                    clothing in different sizes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (params.name === "Second Trimester (12 to 24 Weeks)") {
    return (
      <div className="card m-5">
        <div className="card-body">
          <div id="details">
            <div className="qna">
              <div className="questions">
                <p>What happens to your body during the second trimester?</p>
              </div>
              <div className="answers">
                <p>
                  During the second trimester of pregnancy, symptoms that you
                  may have experienced during the first trimester begin to
                  improve. Many women report that nausea and fatigue begin to
                  lessen and they consider the second trimester the easiest and
                  most enjoyable part of their pregnancy.
                </p>
                <p>The following changes and symptoms may occur:</p>
                <ul>
                  <li>the uterus expands</li>
                  <li>you begin to show a larger abdomen</li>
                  <li>
                    dizziness or light-headedness due to lower blood pressure
                  </li>
                  <li>feeling the baby move</li>
                  <li>body aches</li>
                  <li>increased appetite</li>
                  <li>
                    stretch marks on the stomach, breast, thighs, or buttocks
                  </li>
                  <li>
                    skin changes, like darkening of the skin around your
                    nipples, or patches of darker skin
                  </li>
                  <li>itching</li>
                  <li>swelling of the ankles or hands</li>
                </ul>
                <p>Call your doctor if you experience any of these symptoms:</p>
                <ul>
                  <li>
                    <a href="https://www.healthline.com/symptom/nausea">
                      nausea
                    </a>
                  </li>
                  <li>
                    <a href="https://www.healthline.com/symptom/vomiting">
                      vomiting
                    </a>
                  </li>
                  <li>
                    <a href="https://www.healthline.com/health/jaundice-yellow-skin">
                      jaundice{" "}
                    </a>
                    (yellowing of the whites of the eyes)
                  </li>
                  <li>extreme swelling</li>
                  <li>
                    <a href="https://www.healthline.com/health/pregnancy/second-trimester-weight-gain">
                      rapid weight gain
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>What happens to the fetus during the second trimester?</p>
              </div>
              <div className="answers">
                <p>
                  The baby’s organs become fully developed during the second
                  trimester. The baby can also start to hear and swallow. Small
                  hairs become noticeable. Later on in the second trimester, the
                  baby will begin to move around. It will develop sleeping and
                  waking cycles that a pregnant woman will begin to notice.
                </p>
                <p>
                  According to the
                  <a href="http://americanpregnancy.org/while-pregnant/second-trimester/">
                    American Pregnancy Association
                  </a>
                  , by the end of the second trimester the baby will be around
                  14 inches in length and weigh a little over two pounds.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>What can be expected at the doctor?</p>
              </div>
              <div className="answers">
                <p>
                  Women should see a doctor about every two to four weeks during
                  the second trimester of pregnancy. Tests that the doctor may
                  perform during a visit include:
                </p>
                <ul>
                  <li>measuring your blood pressure</li>
                  <li>checking your weight</li>
                  <li>
                    <a href="https://www.healthline.com/health/pregnancy/ultrasound">
                      ultrasound
                    </a>
                  </li>
                  <li>diabetes screening with blood tests</li>
                  <li>birth defect and other genetic screening tests</li>
                  <li>
                    <a href="https://www.healthline.com/health/amniocentesis">
                      amniocentesis
                    </a>
                  </li>
                </ul>
                <p>
                  During the second trimester, your doctor can use an ultrasound
                  test to determine whether or not your baby is a boy or a girl.
                  Deciding whether or not you want to know the sex of the baby
                  before you give birth is your own choice.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>How can you stay healthy during the second trimester?</p>
              </div>
              <div className="answers">
                <p>
                  It’s important to be aware of what to do and what to avoid as
                  your pregnancy continues. This will help you take care of
                  yourself and your developing baby.
                </p>
                <p className="emphasis">What to do</p>
                <ul>
                  <li>
                    Continue to take
                    <a href="https://www.healthline.com/health/pregnancy/best-prenatal-vitamins">
                      prenatal vitamins
                    </a>
                    .
                  </li>
                  <li>Exercise regularly.</li>
                  <li>
                    Work out your pelvic floor by doing
                    <a href="https://www.healthline.com/health/kegel-exercises">
                      Kegel exercises
                    </a>
                    .
                  </li>
                  <li>
                    Eat a diet high in fruits, vegetables, low-fat forms of
                    protein, and fiber.
                  </li>
                  <li>Drink lots of water.</li>
                  <li>
                    Eat enough calories (about 300 calories more than normal).
                  </li>
                  <li>
                    Keep your teeth and gums healthy. Poor dental hygiene is
                    linked to premature labour.
                  </li>
                </ul>
                <p className="emphasis">What to avoid</p>
                <ul>
                  <li>
                    strenuous exercise or strength training that could cause an
                    injury to your stomach
                  </li>
                  <li>alcohol</li>
                  <li>
                    caffeine (no more than one cup of coffee or tea per day)
                  </li>
                  <li>smoking</li>
                  <li>illegal drugs</li>
                  <li>raw fish or smoked seafood</li>
                  <li>
                    shark, swordfish, mackerel, or white snapper fish (they have
                    high levels of mercury)
                  </li>
                  <li>raw sprouts</li>
                  <li>
                    cat litter, which can carry a parasite that causes
                    <a href="https://www.healthline.com/health/toxoplasmosis">
                      toxoplasmosis
                    </a>
                  </li>
                  <li>unpasteurized milk or other dairy products</li>
                  <li>deli meats or hot dogs</li>
                  <li>
                    the following prescription drugs:
                    <a href="https://www.healthline.com/health/acne/accutane-side-effects#pregnancy-warning4">
                      isotretinoin
                    </a>
                    (Accutane) for acne, acitretin (Soriatane) for psoriasis,
                    thalidomide (Thalomid), and ACE inhibitors for high blood
                    pressure
                  </li>
                </ul>
                <p>
                  Ask your doctor if you have any concerns about the
                  prescription drugs or supplements you are taking.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>
                  What can you do during the second trimester to prepare for
                  birth?
                </p>
              </div>
              <div className="answers">
                <p>
                  Although there are still several weeks left in the pregnancy,
                  you may want to plan for delivery earlier to help make the
                  third trimester less stressful. Here are some things you can
                  do now to prepare for birth:
                </p>
                <ul>
                  <li>
                    Take prenatal education classNamees that are offered locally.
                  </li>
                  <li>
                    Consider classNamees on breastfeeding, infant CPR, first aid,
                    and parenting.
                  </li>
                  <li>Educate yourself with online research.</li>
                  <li>
                    Watch birth videos on YouTube that are natural and not
                    frightening.
                  </li>
                  <li>
                    Tour the hospital or birth center where you will be giving
                    birth.
                  </li>
                  <li>
                    Make a nursery or space in your house or apartment for the
                    newborn baby.
                  </li>
                </ul>
                <p>
                  Consider whether or not you want to take medication for the
                  pain during delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card m-5">
        <div className="card-body">
          <div id="details">
            <div className="qna">
              <div className="questions">
                <p>
                  What happens to a woman’s body during the first trimester?
                </p>
              </div>
              <div className="answers">
                <p>
                  In the first trimester, a woman’s body goes through many
                  changes. The body releases hormones that affect almost every
                  single organ in the body. The first sign you may be pregnant
                  is missing a period. As the first few weeks pass, some women
                  experience the following:
                </p>
                <ul>
                  <li>tiredness</li>
                  <li>upset stomach</li>
                  <li>throwing up</li>
                  <li>mood swings</li>
                  <li>tender breasts</li>
                  <li>
                    <a href="https://www.healthline.com/health/gerd/pregnancy">
                      heartburn
                    </a>
                  </li>
                  <li>weight gain</li>
                  <li>headaches</li>
                  <li>
                    <a href="https://www.healthline.com/health/pregnancy/when-do-cravings-start">
                      cravings for certain foods
                    </a>
                  </li>
                  <li>
                    <a href="https://www.healthline.com/health/pregnancy/food-aversions">
                      revulsion to certain foods
                    </a>
                  </li>
                  <li>
                    <a href="https://www.healthline.com/health/pregnancy/constipation-remedies">
                      constipation
                    </a>
                  </li>
                </ul>
                <p>
                  You may need to rest more or eat smaller meals during this
                  time. Some women, however, don’t feel any of these symptoms at
                  all.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>What happens to the fetus during the first trimester?</p>
              </div>
              <div className="answers">
                <p>
                  The first day of your pregnancy is also the first day of your
                  last menstrual period. At about 10 to 14 days after, an egg is
                  released, combines with a sperm, and conception occurs. A baby
                  develops rapidly during the first trimester. The fetus begins
                  to develop a brain and spinal cord, and the organs begin to
                  form. The baby’s heart will also begin to beat during the
                  first trimester.
                </p>
                <p>
                  Arms and legs begin to bud in the first few weeks, and by the
                  end of eight weeks, fingers and toes start to form. By the end
                  of the first trimester, the baby’s sex organs have formed.
                  According to the
                  <a href="http://www.womenshealth.gov/pregnancy/you-are-pregnant/stages-of-pregnancy.html">
                    Office on Women’s Health
                  </a>
                  , the baby is now about 3 inches long and weighs almost 1
                  ounce.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>What can be expected at the doctor?</p>
              </div>
              <div className="answers">
                <p>
                  When you first learn you are pregnant, make an appointment
                  with your doctor to begin caring for the developing baby. If
                  you are not already on prenatal vitamins, start them
                  immediately. Ideally, women take
                  <a href="https://www.healthline.com/health/pregnancy/folic-acid">
                    folic acid
                  </a>
                  (in prenatal vitamins) for a year before the pregnancy. Women
                  normally see their doctor once a month during the first
                  trimester.
                </p>
                <p>
                  During your first visit, a doctor will take a full health
                  history and perform a full physical and pelvic exam. The
                  doctor may also:
                </p>
                <ul>
                  <li>
                    perform an
                    <a href="https://www.healthline.com/health/pregnancy/ultrasound">
                      ultrasound
                    </a>
                    to confirm the pregnancy
                  </li>
                  <li>
                    perform a
                    <a href="https://www.healthline.com/health/pap-smear">
                      Pap test
                    </a>
                  </li>
                  <li>take your blood pressure</li>
                  <li>
                    test for sexually transmitted infections, HIV, and hepatitis
                  </li>
                  <li>
                    estimate your date of delivery or “due date,” which is
                    around 266 days from the first day of your last period
                  </li>
                  <li>screen for risk factors like anaemia</li>
                  <li>check thyroid levels</li>
                  <li>check your weight</li>
                </ul>
                <p>
                  At around 11 weeks, the doctor will perform a test called a
                  nuchal translucency (NT) scan. The test uses an ultrasound to
                  measure the baby’s head and thickness of the baby’s neck. The
                  measurements can help determine the chance that your baby will
                  be born with a genetic disorder known as Down syndrome.
                </p>
                <p>
                  Ask your doctor whether or not genetic screening is
                  recommended for your pregnancy. Genetic screening is a test
                  used to find out your baby’s risk for specific genetic
                  diseases.
                </p>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>How can I stay healthy during the first trimester?</p>
              </div>
              <div className="answers">
                <p>
                  It’s important for a woman to be aware of what to do and what
                  to avoid while pregnant in order to take care of themselves
                  and their developing baby.
                </p>
                <p className="emphasis">What to do</p>
                <p>
                  Here are good personal health measures to take during the
                  first trimester:
                </p>
                <ul>
                  <li>Take prenatal vitamins.</li>
                  <li>Exercise regularly.</li>
                  <li>Work out your pelvic floor by doing Kegel exercises.</li>
                  <li>
                    Eat a diet high in fruits, vegetables, low-fat forms of
                    protein, and fiber.
                  </li>
                  <li>Drink lots of water.</li>
                  <li>
                    Eat enough calories (about 300 calories more than normal).
                  </li>
                </ul>
                <p className="emphasis">What to avoid</p>
                <p>
                  These things should be avoided during the first trimester:
                </p>
                <ul>
                  <li>
                    strenuous exercise or strength training that could cause an
                    injury to your stomach
                  </li>
                  <li>alcohol</li>
                  <li>
                    caffeine (no more than one cup of coffee or tea per day)
                  </li>
                  <li>smoking</li>
                  <li>illegal drugs</li>
                  <li>raw fish or smoked seafood (no sushi)</li>
                  <li>
                    shark, swordfish, mackerel, or white snapper fish (they have
                    high levels of mercury)
                  </li>
                  <li>raw sprouts</li>
                  <li>
                    cat litter, which can carry a parasitic disease called
                    toxoplasmosis
                  </li>
                  <li>unpasteurized milk or other dairy products</li>
                  <li>deli meats or hot dogs</li>
                </ul>
              </div>
            </div>

            <div className="qna">
              <div className="questions">
                <p>
                  What else should be considered during the first trimester?
                </p>
              </div>
              <div className="answers">
                <p>
                  Body changes provide plenty to think about during the first
                  trimester, but having a baby will affect other parts of your
                  life too. There are many things to start to think about during
                  the first few months of your pregnancy so you can prepare for
                  the future.
                </p>
                <p className="emphasis">
                  When to tell your friends, family, and employer
                </p>
                <p>
                  The first trimester is the most common time for a loss of
                  pregnancy (miscarriage), so you may want to wait for the
                  pregnancy to settle into the second trimester.
                </p>
                <p>
                  You may also want to consider whether or not you will keep
                  working or quit your job as your pregnancy progresses, and if
                  your employer provides unpaid maternity leave for the birth
                  and care of your new-born.
                </p>
                <p className="emphasis">Where you want to give birth</p>
                <p>
                  You may want to start to consider where you would like to
                  deliver your baby when it’s time to give birth. Women can
                  choose to deliver at a hospital, birth centre, or at their own
                  home. You should weigh the pros and cons of each location and
                  discuss them with your doctor.
                </p>
                <p>
                  The
                  <a href="https://www.acog.org/Resources-And-Publications/Committee-Opinions/Committee-on-Obstetric-Practice/Planned-Home-Birth">
                    American Congress of Obstetricians and Gynaecologists
                  </a>
                  (ACOG) believes that hospitals and birthing centres are the
                  safest place to deliver a baby. If there is an emergency, a
                  hospital is fully equipped to handle the situation.
                </p>
                <p className="emphasis">If you have a high-risk pregnancy</p>
                <p>
                  High-risk pregnancy means that there is a greater chance of
                  complications. Factors that may make your pregnancy high-risk
                  include:
                </p>
                <ul>
                  <li>being young</li>
                  <li>being over 35 years old</li>
                  <li>being overweight</li>
                  <li>being underweight</li>
                  <li>
                    having high blood pressure, diabetes, HIV, cancer or other
                    autoimmune disorders
                  </li>
                  <li>being pregnant with twins or multiples</li>
                </ul>
                <p>
                  Women with a high-risk pregnancy may need to visit the doctor
                  more often and sometimes may need a specially trained doctor.
                  Having a high-risk pregnancy doesn’t necessarily mean you will
                  have any problems.
                </p>
                <p className="emphasis">Paying for care</p>
                <p>
                  Many women worry about the costs of medical bills during a
                  pregnancy. The good news is that there are options available
                  in every state in the United States to help pay for care. As
                  soon as you find out you are pregnant, you should make an
                  appointment to see your health care provider, a midwife or a
                  physician (in some medical practices, both are in the same
                  office). Health insurance options have changed over time, and
                  most offer pregnant women more options. Insurance companies
                  are learning it is important to provide prenatal care to
                  prevent more expensive medical care later. Local hospitals,
                  clinics, and other government programs are available to help
                  with:
                </p>
                <ul>
                  <li>food</li>
                  <li>nutrition</li>
                  <li>counselling</li>
                  <li>free access to health services for pregnant women</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pregnancy_data;
