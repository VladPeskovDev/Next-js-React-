<html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
    />

    <title>Galileo Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div class="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" style='font-family: "Public Sans", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243647] px-10 py-3">
          <div class="flex items-center gap-4 text-white">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Dawn Justice</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">About</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Practice Areas</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1466b8] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">View site</span>
            </button>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/2e6faddb-bc7c-45f6-9a99-84a7d38550a1.png");'
                >
                  <div class="flex flex-col gap-2 text-center">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Case Results
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      These are some of the case results that our firm has achieved. We cannot guarantee similar results in your case, but we will fight for you. Call us today to
                      schedule a free consultation.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/fbd67732-1748-4ce6-b9fb-e0353076248f.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Murder Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with murder in the first degree. After thorough investigation and legal research, we filed a motion to dismiss. The judge granted our
                    motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/7f1ddcf3-e6eb-439c-a325-d2b241756490.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Aggravated Assault Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with aggravated assault. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/fe05ee6e-707e-4f66-a6d1-7a177c5db710.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Drug Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with drug possession. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/82d84758-ff69-45e8-9404-f685ef2de9c8.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Theft Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with theft. We filed a motion to dismiss based on insufficient evidence. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/9879ed79-a44e-4385-8c87-fbc5a7b065b5.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Domestic Violence Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with domestic violence. We filed a motion to dismiss based on lack of probable cause. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/94fba851-0e31-44cd-99b6-577b25e49939.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Robbery Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with robbery. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/d5e981fd-3c68-4cf4-9cb5-0b24366a5e67.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Fraud Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with fraud. We filed a motion to dismiss based on lack of evidence. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/03d5713f-f425-41de-b815-80f51737c8c2.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Burglary Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with burglary. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/cd3d0e21-11f4-427e-a595-9d2766d6aba0.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Embezzlement Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with embezzlement. We filed a motion to dismiss based on lack of evidence. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/6e20555d-ad80-4405-9654-4ab640859760.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Weapons Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with weapons possession. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/b0ca6d2f-956a-4715-8090-36732811eaf8.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Sex Crimes Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with sex crimes. We filed a motion to dismiss based on lack of evidence. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/03c6967e-3fa4-4d13-b8af-7b46045dd60e.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of DUI Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with DUI. We filed a motion to suppress evidence based on an illegal stop. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/eba4b5cf-d6c0-494b-a474-d32423024429.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Juvenile Crimes Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with juvenile crimes. We filed a motion to dismiss based on lack of probable cause. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/4a6c7135-0ea6-497a-9587-928505a7e16c.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Violent Crimes Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with violent crimes. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/75b51a7a-96ea-4de3-81fa-a160f8c869d5.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of White Collar Crimes Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with white collar crimes. We filed a motion to dismiss based on lack of evidence. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/2791fccc-2542-40d2-842a-b5f1289225ba.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Probation Violations Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with probation violations. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case
                    was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/7de6b74b-7d10-49a2-b162-905228437a21.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Child Abuse Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with child abuse. We filed a motion to dismiss based on insufficient evidence. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/bfbfae97-c0ad-44c6-92d6-18a4068208f2.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Expungement Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with expungement violations. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case
                    was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/fe34cc00-155c-4844-8c5f-3de8977270d0.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Kidnapping Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with kidnapping. We filed a motion to dismiss based on lack of probable cause. The judge granted our motion and the case was dismissed.
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/1b64ff5a-53fd-4bd2-a74d-5bbbcb9d652d.png");'
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">Dismissal of Homicide Charges</p>
                  <p class="text-[#93adc8] text-sm font-normal leading-normal">
                    Our client was charged with homicide. We filed a motion to suppress evidence based on an illegal search. The judge granted our motion and the case was
                    dismissed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
