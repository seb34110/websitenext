import Link from "next/link";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section>
        <div className="mx-10 flex-row items-center flex hover:flex-row hover:animate-bounce delay-75">
          <svg
            href="../icons/wordpress"
            data-name="wordpress"
            viewBox="0 0 50 50"
            id="wordpress"
          >
            <path
              fill="#05CEE0"
              d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"
            ></path>
          </svg>

          <svg
            href="../icons/java-script"
            data-name="Java-Script"
            viewBox="0 0 50 50"
            id="java-script"
          >
            <path
              fill="#05CEE0"
              d="M14.478,14.8829a4.06111,4.06111,0,0,1-2.18725-.39825,1.4389,1.4389,0,0,1-.53547-1.01019.22184.22184,0,0,0-.22662-.21942c-.31659-.00385-.63312-.003-.94965-.00043a.2113.2113,0,0,0-.23138.18628,2.33854,2.33854,0,0,0,.75305,1.84454,3.99135,3.99135,0,0,0,2.22827.8382,8.06151,8.06151,0,0,0,2.53308-.10755,3.12591,3.12591,0,0,0,1.67823-.90442,2.33824,2.33824,0,0,0,.396-2.23077,1.869,1.869,0,0,0-1.2304-1.09454c-1.28077-.4494-2.66431-.41541-3.97-.7569-.22668-.07135-.50366-.1488-.60467-.38879a.85461.85461,0,0,1,.28418-.95478,2.5576,2.5576,0,0,1,1.34875-.33581,4.07051,4.07051,0,0,1,1.88416.26959,1.43564,1.43564,0,0,1,.68677.99219.243.243,0,0,0,.2276.23565c.31433.00641.62878.00171.94311.00214a.22791.22791,0,0,0,.24732-.16772,2.43369,2.43369,0,0,0-1.18665-2.106,5.8791,5.8791,0,0,0-3.2182-.49243V8.08341a3.50546,3.50546,0,0,0-2.17615.87438,2.1746,2.1746,0,0,0-.43438,2.26264,1.92964,1.92964,0,0,0,1.21838,1.06177c1.27649.46106,2.67554.31311,3.96442.72082.25116.08521.54364.21552.6206.49506a.9907.9907,0,0,1-.26965.94616A2.97065,2.97065,0,0,1,14.478,14.8829Zm5.81891-8.44537q-3.73837-2.114-7.47845-4.22418a1.67742,1.67742,0,0,0-1.63733,0Q7.4556,4.31715,3.72968,6.42075a1.54242,1.54242,0,0,0-.8042,1.34271V16.2377a1.55266,1.55266,0,0,0,.8352,1.355c.71351.38837,1.40674.81629,2.13318,1.17884a3.06373,3.06373,0,0,0,2.73822.07525,2.1275,2.1275,0,0,0,.99482-1.92114c.00555-2.79669.00085-5.59351.00213-8.39026a.21981.21981,0,0,0-.20727-.25415c-.31739-.00513-.63526-.003-.95264-.00085a.20935.20935,0,0,0-.228.21368c-.00427,2.77875.00086,5.55829-.00256,8.33746a.94053.94053,0,0,1-.609.88373,1.53242,1.53242,0,0,1-1.23993-.16595q-.99152-.56-1.983-1.11988a.23714.23714,0,0,1-.13464-.23529q0-4.19383,0-8.38726a.2589.2589,0,0,1,.157-.2602Q8.1423,5.4553,11.85419,3.35953a.258.258,0,0,1,.29163.00043Q15.859,5.452,19.57184,7.5455a.262.262,0,0,1,.15613.26142Q19.72733,12,19.72712,16.19376a.242.242,0,0,1-.13294.23828q-3.65643,2.06753-7.31677,4.12909c-.11658.06494-.25458.16943-.39093.09076-.6391-.36176-1.27039-.73755-1.90735-1.10273a.20589.20589,0,0,0-.22968-.01379,5.21834,5.21834,0,0,1-.88208.41162c-.13806.05591-.30792.07184-.40295.19989a1.31566,1.31566,0,0,0,.43127.31061q1.11741.647,2.236,1.29285a1.62967,1.62967,0,0,0,1.65539.046q3.7261-2.101,7.45185-4.20392a1.55627,1.55627,0,0,0,.83563-1.35474V7.76346A1.53956,1.53956,0,0,0,20.29694,6.43753Z"
            ></path>
          </svg>

          <svg
            href="../icons/react"
            data-name="React"
            viewBox="0 0 50 50"
            id="react"
          >
            <path
              fill="#05CEE0"
              d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"
            ></path>
          </svg>

          <svg
            href="../icons/html5"
            data-name="Html5"
            viewBox="0 0 50 50"
            id="html5"
          >
            <path
              fill="#05CEE0"
              d="M3.1825,2.00012,4.78735,20.00079l7.20191,1.99933,7.22168-2.00207L20.8175,2.00012ZM17.32507,7.88739H8.87683l.20178,2.26074h8.04554l-.60584,6.778L12,18.17834v.00043l-.01013.00275L7.46753,16.92615,7.1582,13.45972H9.37439l.1571,1.76074,2.45874.66388.00208-.00049v-.00018l2.46228-.66461.25635-2.86323H7.05957L6.46411,5.67969h11.0586Z"
            ></path>
          </svg>
          <svg
            href="../icons/css3"
            data-name="CSS3"
            viewBox="0 0 50 50"
            id="css3-simple"
          >
            <path
              fill="#05CEE0"
              d="M20.772,3.36426A1.00062,1.00062,0,0,0,20,3H6A1,1,0,0,0,6,5H18.78613l-.78094,4H5a1,1,0,0,0,0,2H17.61475l-1.1626,5.95508-6.32324,1.99658L4.71875,17.25244l.20361-1.06494a1.00015,1.00015,0,0,0-1.96484-.375L2.5874,17.75244A1.00059,1.00059,0,0,0,3.27,18.894L9.83008,20.9541a1.00175,1.00175,0,0,0,.60107-.00049l7.18994-2.27a1.00064,1.00064,0,0,0,.68018-.7622l2.68018-13.73A1.00008,1.00008,0,0,0,20.772,3.36426Z"
            ></path>
          </svg>
          <svg
            href="../icons/linux"
            data-name="Linux"
            viewBox="0 0 50 50"
            id="linux"
          >
            <path
              fill="#05CEE0"
              d="M19.7 17.6c-.1-.2-.2-.4-.2-.6 0-.4-.2-.7-.5-1-.1-.1-.3-.2-.4-.2.6-1.8-.3-3.6-1.3-4.9-.8-1.2-2-2.1-1.9-3.7 0-1.9.2-5.4-3.3-5.1-3.6.2-2.6 3.9-2.7 5.2 0 1.1-.5 2.2-1.3 3.1-.2.2-.4.5-.5.7-1 1.2-1.5 2.8-1.5 4.3-.2.2-.4.4-.5.6-.1.1-.2.2-.2.3-.1.1-.3.2-.5.3-.4.1-.7.3-.9.7-.1.3-.2.7-.1 1.1.1.2.1.4 0 .7-.2.4-.2.9 0 1.4.3.4.8.5 1.5.6.5 0 1.1.2 1.6.4.5.3 1.1.5 1.7.5.3 0 .7-.1 1-.2.3-.2.5-.4.6-.7.4 0 1-.2 1.7-.2.6 0 1.2.2 2 .1 0 .1 0 .2.1.3.2.5.7.9 1.3 1h.2c.8-.1 1.6-.5 2.1-1.1.4-.4.9-.7 1.4-.9.6-.3 1-.5 1.1-1 .1-.7-.1-1.1-.5-1.7zM12.8 4.8c.6.1 1.1.6 1 1.2 0 .3-.1.6-.3.9h-.1c-.2-.1-.3-.1-.4-.2.1-.1.1-.3.2-.5 0-.4-.2-.7-.4-.7-.3 0-.5.3-.5.7v.1c-.1-.1-.3-.1-.4-.2V6c-.1-.5.3-1.1.9-1.2zm-.3 2c.1.1.3.2.4.2.1 0 .3.1.4.2.2.1.4.2.4.5s-.3.6-.9.8c-.2.1-.3.1-.4.2-.3.2-.6.3-1 .3-.3 0-.6-.2-.8-.4-.1-.1-.2-.2-.4-.3-.1-.1-.3-.3-.4-.6 0-.1.1-.2.2-.3.3-.2.4-.3.5-.4l.1-.1c.2-.3.6-.5 1-.5.3.1.6.2.9.4zM10.4 5c.4 0 .7.4.8 1.1v.2c-.1 0-.3.1-.4.2v-.2c0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6 0 .2.1.3.2.4 0 0-.1.1-.2.1-.2-.2-.4-.5-.4-.8 0-.6.3-1.1.7-1.1zm-1 16.1c-.7.3-1.6.2-2.2-.2-.6-.3-1.1-.4-1.8-.4-.5-.1-1-.1-1.1-.3-.1-.2-.1-.5.1-1 .1-.3.1-.6 0-.9-.1-.3-.1-.5 0-.8.1-.3.3-.4.6-.5.3-.1.5-.2.7-.4.1-.1.2-.2.3-.4.3-.4.5-.6.8-.6.6.1 1.1 1 1.5 1.9.2.3.4.7.7 1 .4.5.9 1.2.9 1.6 0 .5-.2.8-.5 1zm4.9-2.2c0 .1 0 .1-.1.2-1.2.9-2.8 1-4.1.3l-.6-.9c.9-.1.7-1.3-1.2-2.5-2-1.3-.6-3.7.1-4.8.1-.1.1 0-.3.8-.3.6-.9 2.1-.1 3.2 0-.8.2-1.6.5-2.4.7-1.3 1.2-2.8 1.5-4.3.1.1.1.1.2.1.1.1.2.2.3.2.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.3-.1.6-.3.9-.6.4 1.3.8 2.5 1.4 3.6.4.8.7 1.6.9 2.5.3 0 .7.1 1 .3.8.4 1.1.7 1 1.2H18c0-.3-.2-.6-.9-.9-.7-.3-1.3-.3-1.5.4-.1 0-.2.1-.3.1-.8.4-.8 1.5-.9 2.6.1.4 0 .7-.1 1.1zm4.6.6c-.6.2-1.1.6-1.5 1.1-.4.6-1.1 1-1.9.9-.4 0-.8-.3-.9-.7-.1-.6-.1-1.2.2-1.8.1-.4.2-.7.3-1.1.1-1.2.1-1.9.6-2.2 0 .5.3.8.7 1 .5 0 1-.1 1.4-.5h.2c.3 0 .5 0 .7.2.2.2.3.5.3.7 0 .3.2.6.3.9.5.5.5.8.5.9-.1.2-.5.4-.9.6zm-9-12c-.1 0-.1 0-.1.1 0 0 0 .1.1.1s.1.1.1.1c.3.4.8.6 1.4.7.5-.1 1-.2 1.5-.6l.6-.3c.1 0 .1-.1.1-.1 0-.1 0-.1-.1-.1-.2.1-.5.2-.7.3-.4.3-.9.5-1.4.5-.5 0-.9-.3-1.2-.6-.1 0-.2-.1-.3-.1z"
            ></path>
          </svg>
          <svg
            href="../icons/windows"
            data-name="Windows"
            viewBox="0 0 50 50"
            id="windows"
          >
            <path
              fill="#05CEE0"
              d="M22 2 11.2 3.6v8l10.8-.1V2zM10.2 12.5 2 12.4v6.8l8.1 1.1.1-7.8zM2 4.8v6.8h8.1V3.7L2 4.8zm9.1 7.7v7.9L22 22v-9.4l-10.9-.1z"
            ></path>
          </svg>
          <svg
            href="../icons/github"
            data-name="Git"
            viewBox="0 0 50 50"
            id="github"
          >
            <path
              fill="#05CEE0"
              d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
