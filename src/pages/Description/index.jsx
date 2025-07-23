import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
import Iconapply from "@/assets/icon/icon-apply.png";
import IconCalendar from "@/assets/icon/icon-calendar.png";
import IconHuman from "@/assets/icon/icon-human.png";
import IconList from "@/assets/icon/icon-list.png";
import IconMoney from "@/assets/icon/icon-money.png";
import IconService from "@/assets/icon/icon-service.png";
import { Row, Col } from "antd";
import { useState } from "react";
import FooterBgcImg from "@/components/FooterBgcImg";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import RulesIcon from "@/assets/icon/icon-rules.svg";
import LineContact from "@/components/LineContact";

function Description() {
  const [activeKeys, setActiveKeys] = useState({
    time: false,
    method: false,
    items: false,
    qualification: false,
    payment: false,
    service: false,
  });

  const handleToggle = (key) => {
    setActiveKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCollapseAll = () => {
    setActiveKeys({
      time: false,
      method: false,
      items: false,
      qualification: false,
      payment: false,
      service: false,
    });
  };

  const handleExpandAll = () => {
    setActiveKeys({
      time: true,
      method: true,
      items: true,
      qualification: true,
      payment: true,
      service: true,
    });
  };

  const collapseStyle = "mb-6 rounded-lg bg-[#e8fcfc]";

  const headerClassName =
    "flex items-center  justify-between cursor-pointer font-bold rounded-xl bg-gradient-to-b from-white to-[#ecfee8] border-[2px] border border-[#19a4b4] text-base px-[32px] py-[18px]  md:px-[80px] md:py-[24px]";
  const contentStyle =
    "px-[32px] py-[24px] md:px-[80px] md:py-[62px] bg-white/95 rounded-xl shadow-xl border border-[#eaf8fb]/30";
  const renderCollapseHeader = (icon, text, isActive) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={icon}
          alt={text}
          className="md:w-[37px] md:h-[37px] w-[24px] h-[24px] mr-4 md:mr-[40px]"
        />
        <span className="md:text-2xl text-[#155413] font-bold text-base ">{text}</span>
      </div>
      <span className="md:text-[18px]  font-bold text-[12px] ">
        {isActive ? <MinusOutlined className="text-2xl" /> : <PlusOutlined />}
      </span>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[52px]">
      <PageTitle icon={RulesIcon} iconClassName="md:w-[32px] md:h-[24px]  w-[22px] h-[17px]" title="規則說明" />

      <Row gutter={24} className="w-full">
        <Col xs={1} md={3} />
        <Col className="p-0" xs={22} md={18}>
          <div className="w-full  ">
            <div className="flex justify-end mb-2 text-sm text-teal-600">
              <button
                onClick={handleCollapseAll}
                className={`mr-2 ${
                  Object.values(activeKeys).some((key) => key)
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                全部收合
              </button>{" "}
              |
              <button
                onClick={handleExpandAll}
                className={`ml-2 ${
                  Object.values(activeKeys).some((key) => key)
                    ? "text-gray-400"
                    : "text-black"
                }`}
              >
                全部展開
              </button>
            </div>

            <div className="bg-transparent">
              {/* 申請時間 */}
              <div className={collapseStyle}>
                <div
                  className={headerClassName}
                  onClick={() => handleToggle("time")}
                >
                  {renderCollapseHeader(
                    IconCalendar,
                    "申請時間",
                    activeKeys.time
                  )}
                </div>
                {activeKeys.time && (
                  <div className={contentStyle}>
                    <p className="font-bold text-[12px] md:text-[16px]">
                      申請日期即日起至
                      <span className="text-red-500 text-base md:text-2xl">
                        114年12月15日止
                      </span>
                      ,如當年度預算用罄，本府得停止受理補助申請
                    </p>
                  </div>
                )}
              </div>

              {/* 申請方式 */}
              <div className={collapseStyle}>
                <div
                  className={headerClassName}
                  onClick={() => handleToggle("method")}
                >
                  {renderCollapseHeader(
                    Iconapply,
                    "申請方式",
                    activeKeys.method
                  )}
                </div>
                {activeKeys.method && (
                  <div className={contentStyle}>
                    <h2 className="text-xl font-bold  ">【一、紙本申請】</h2>
                    <h3 className="font-bold  mb-2">【📌 申請流程】</h3>
                    <p className="mb-2">
                    1️⃣ 申請者應於本計畫公告期間，檢具下列文件 1 式 1 份，交付本府審核：
                    </p>
                    <div className=" space-y-1">
                      <p>(1) 補助申請表（附件2）</p>
                      <p>(2) 證明文件審核表（附件3）</p>
                      <p>(3) 補助經費概算表（附件4）</p>
                      <p>(4) 切結書（附件5）</p>
                      <p>(5) 設立登記相關證明文件（公司／商號登記文件或工廠登記核准公文影本，合夥或公司應另附合夥契約書、股東名冊或公司章程）</p>
                      <p>(6) 最新一期一般營業人銷售額與稅額申報書</p>
                    </div>
                    <p className="mb-4 mt-4">
                    2️⃣ 上述文件如為影本，需加蓋申請人（公司、商業）及負責人印鑑章（外國公司請加蓋訴訟及非訴訟代理人印鑑章），並註明「與正本相符」。
                    </p>
                    <p className="mb-4">
                    3️⃣本計畫核定名額及補助額度依受理先後及優先項目順序辦理，若當年度預算用罄，將停止受理補助申請。
                    </p>
                    <h3 className=" ">【📬 收件資訊】</h3>
                    <ul className="list-disc list-inside">
                      <li className="">
                        <span className="-ml-3">
                        收件地址：(202) 基隆市中正區信二路 299 號 4 樓
                        </span>
                      </li>
                      <li className="">
                        <span className="-ml-3">
                        收件單位：「基隆市政府產業發展處產業服務科」收
                        </span>
                      </li>
                      <li className="">
                        <span className="-ml-3">
                        連絡電話：02-2428-9225（產業服務科）
                        </span>
                      </li>
                      <li className="">
                        <span className="-ml-3">
                          備註：信封請註明「申請『114 年度基隆市機車產業輔導綠能轉型產業補助計畫』」
                        </span>
                      </li>
                    </ul>
                    <div className=" ">
                    ✅郵寄說明：申請期限內寄送紙本文件（以郵戳為憑），寄件後請於平日上班時間來電確認。
                    </div>
                    <div className=" ">
                    ✅親送說明：親自送達者以本府收文登錄日期為憑。
                    </div>

                    <div>
                    🔗 更多詳情請至本府公告網站查詢：
                      <a
                        href="https://www.klcg.gov.tw/tw/economy/2627-296943.html?fbclid=IwZXh0bgNhZW0CMTAAAR1JEc8ywMPEGvuPdLd66P7xBMATbddsetYDbXigWceVrv_O6_x_DKCHsdQ_aem_B73JqS_VMOYJcJtkjBsrXw"
                        className="text-blue-600 hover:underline"
                      >
                       基隆市政府「114年度基隆市機車產業輔導綠能轉型產業補助計畫」公告
                      </a>
                    </div>

                    <h2 className="text-xl mt-5 font-bold  ">【二、線上申請】</h2>
                    <h3 className="font-bold  mb-2">【📌 申請流程】</h3>
                    <div>
                      <p className="">1️⃣ 本網站僅提供申請作業，後續核銷作業須由申請人親自至市府窗口辦理現場核銷，線上平台不提供核銷及補件功能。</p>
                      <p className="">
                      2️⃣ 申請者應於本計畫公告期間，上傳下列文件至本網站【申請補助專區】，填寫相關資料進行申請，供本府審核：
                      </p>
                      <div className="">
                        <p>(1) 設立登記相關證明文件（公司／商號登記證明文件，或工廠登記核准公文影本，合夥或公司應另附合夥契約書、股東名冊或公司章程）</p>
                        <p>
                        (2) 最新一期一般營業人稅額申報書
                        ※申請時僅須繳交上述兩項文件，其他補助項目之相關佐證文件（切結書、完訓證書、發票…等）將於核銷作業時補交正本，請申請人依市府通知配合辦理。
                        </p>
                        <p className="">
                        3️⃣ 文件若為影本，須加蓋申請人（公司／商業）及負責人印鑑章，並註明「與正本相符」。
                      </p> <p className="">
                      4️⃣ 本計畫核定名額及補助額度依受理先後及優先項目順序辦理，若當年度預算用罄，將停止受理補助申請。
                      </p>
                        
                      </div>
                      <div
                        className=" 
                "
                      >
                    <h3 className="font-bold  mb-2 mt-4">【📄線下核銷作業(線上/線下皆同)】</h3>
                    <p> 
                    1️⃣ 市府審核通過後，申請人應依通知攜帶下列文件至市府窗口辦理核銷作業：
                      </p>
                        <ul className="list-disc list-inside">
                          <li className="">
                            <span className="-ml-3">
                            (1)切結書（附件5）
                            </span>
                          </li>
                          <li className="">
                            <span className="-ml-3">
                            (2)產業轉型支援補助請領申請表（附件6-1）
                            </span>
                          </li>
                            <li className="">
                              <span className="-ml-3">
                              (3)綠能交通產業推廣請領申請表（附件6-2）
                              </span>
                            </li>
                            <li className="">
                              <span className="-ml-3">
                              (4)領據（附件7）
                              </span>
                            </li>
                            <li className="">
                              <span className="-ml-3">
                              (5)申請車行為戶名之金融機構指定帳號存簿封面影本。（※首次核銷時須檢附，後續申請可不須再檢附）
                              </span>
                            </li>
                            <li className="">
                              <span className="-ml-3">
                              (6)身分證正／反面影本
                              </span>
                            </li>
                              <li className="">
                                <span className="-ml-3">
                                (7)其他佐證證明文件（依補助項目別檢附相應證明／發票／系統租賃證明／授權證書等）
                                </span>
                              </li>
                       
                        </ul>
                      </div>
                      <div>
                    🔗 更多詳情請至本府公告網站查詢：
                    <a
                        href=" /114-keelungEV/#/download"
                        className="text-blue-600 hover:underline"
                      >
                       申請單據下載專區下載
                      </a>
                    </div>
                 
                    </div>
                  </div>
                )}
              </div>

              {/* 補助項目 */}
              <div className={collapseStyle}>
                <div
                  className={headerClassName}
                  onClick={() => handleToggle("items")}
                >
                  {renderCollapseHeader(IconList, "補助項目", activeKeys.items)}
                </div>
                {activeKeys.items && (
                  <div className={contentStyle}>
                    <div className="mb-4">
                      本計畫補助期間為本市環保局「基隆市公益青年就業電動機車補助計畫
                      1.0」公告起訖日 112 年 09 月 12 日至 114 年 12 月 15
                      日(含)止。
                    </div>
                    <h2 className="text-xl font-bold">
                      【🚗 產業轉型支援補助】
                    </h2>
                    <h3 className="font-bold">(1) 綠能轉型補助</h3>
                    <p className="mb-2">
                      <span className="font-bold">💰 補助金額：</span>上限100,000元整。
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">📌</span>輔導傳統車行取得中央認可（經濟部、勞動部、環境部共同頒予之第一階段機車維修技術課程結訓證書）及各車廠電動機車維修保養之授權認證。
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">📄 </span>如尚未取得中央認可證書，亦可先行申請，惟須於核銷時檢附符合規定之證書。
                     
                    </p>

                    <h3 className="font-bold">(2) 留才獎勵補助</h3>
                    <p className="mb-2">
                      <span className="font-bold">💰 補助金額：</span>上限20,000元整。
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">📌</span>獎勵車行所屬員工取得中央認可（經濟部、勞動部、環境部共同頒予之第一階段機車維修技術課程結訓證書）及各車廠認證之電動機車維修技術訓練證書，並應提供該員工於車行就業滿六個月之在職證明文件。
                    </p>

                    <h3 className="font-bold">(3) 設備補助</h3>
                    <p className="mb-2">
                      <span className="font-bold">💰 補助金額：</span>上限80,000元整。
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">📌</span>輔導轉型車行購置經濟部審查核定公告之保養維修診斷器材、維修系統租賃費、營運空間店面改造費及固定於建物之識別標誌定著物等項目。
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">🔗 ※ 詳細器材清單請參考：</span>
                      <a href="https://www.lev.org.tw/shop/files/repairtools" className="text-blue-600 hover:underline">
                        維修工具清單
                      </a>
                    </p>

                    <h2 className="text-xl mt-2.5 font-bold">
                      【🌿 綠能交通產業推廣】
                    </h2>
                    <h3 className="font-bold">(1) 公益青年機車推廣</h3>
                    <p className="mb-2">
                      <span className="font-bold">💰 補助金額：</span>每一代辦核准案件補助新臺幣600元整。
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">📌 內容說明：</span>配合本市環保局「基隆市公益青年就業電動機車補助計畫」，擔任代辦窗口，協助受理民眾申請文件並完成相關作業程序。
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">🔗 詳情請參閱：</span>
                      <a href="https://www.klepb.klcg.gov.tw/tw/klepb1/3886-296139.html" className="text-blue-600 hover:underline">
                        114年基隆市公益青年就業電動機車補助計畫
                      </a>
                    </p>

                    <h3 className="font-bold">(2) 中小企業圓夢貸款推廣</h3>
                    <p className="mb-2">
                      <span className="font-bold">💰 </span>每案申請核貸最高以100萬元為上限。
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">📌</span>需符合本府辦理「基隆市中小企業圓夢貸款」專案相關規定辦理。
                   
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">🔗 詳情請參閱：</span>
                      <a href="https://www.keelungyouth.com/%E5%9C%93%E5%A4%A2%E8%B2%B8%E6%AC%BE" className="text-blue-600 hover:underline">
                      基隆市中小企業圓夢貸款專案
                      </a>
                    </p>

                    <h3 className="font-bold">(3) 青年創業貸款利息補貼推廣</h3>
                    <p className="mb-2">
                      <span className="font-bold">💰 </span>通過第二項中小企業圓夢貸款，且年齡在18-45歲之業者，即可申請「基隆市青年創業貸款利息補貼計畫」，貸款200萬元利息額度之補助。
                    </p>
                    
                    <p className="mb-4">
                      <span className="font-bold">📌</span>需符合本府辦理「基隆市青年創業貸款利息補貼計畫」專案相關規定辦理。
                     
                    </p>
                    <p className="mb-4">
                      <span className="font-bold">🔗 詳情請參閱：</span>
                      <a href="https://www.keelungyouth.com/%E8%B2%B8%E6%AC%BE%E5%88%A9%E6%81%AF%E8%A3%9C%E8%B2%BC" className="text-blue-600 hover:underline">
                      基隆市青年創業貸款利息補貼計畫
                      </a>
                    </p>

                    
                  </div>
                )}
              </div>

              {/* 補助資格 */}
              <div className={collapseStyle}>
                <div
                  className={headerClassName}
                  onClick={() => handleToggle("qualification")}
                >
                  {renderCollapseHeader(
                    IconHuman,
                    "補助資格",
                    activeKeys.qualification
                  )}
                </div>
                {activeKeys.qualification && (
                  <div className={contentStyle}>
                    <div>
                      {/* <h2 className=" ">補助（合作）對象及資格條件</h2> */}

                      <h3 className="font-bold text-xl mt-4">【📌必要條件】</h3>
                      <div className="space-y-1">
                        <p>
                          (1) 已依公司法或商業登記法完成設立登記，所經營之事業體，營業地址與稅籍應設於基隆市，或前述事業體經由基隆市機車商業同業公會推薦。
                        </p>
                        <p>
                          (2) 限營業項目為機車零售或維修保養之獨資、合夥事業或法人並有稅籍登記者。
                        </p>
                      </div>

                      <h3 className="font-bold text-xl mt-4">【📌優先條件】</h3>
                      <p className="mb-4">
                      已通過「經濟部主辦機車行升級轉型輔導－機車維修訓練課程」，並取得經濟部、勞動部、環境部共同頒予之第一階段機車維修技術課程結訓證書。（若無該證書亦可先行申請）
                      </p>

                      <h3 className="font-bold text-xl">
                        【❌有下列情形之一者，視為不符申請資格    】
                      </h3>
                      <div className="space-y-1">
                        <p>(1)申請人所經營事業之稅籍遷出基隆市。</p>
                        <p>(2)不符本計畫申請資格或補助條件。</p>
                        <p>
                          (3)檢具之申請或核銷資料虛偽不實、虛偽買賣、偽造、變造或重複請款等情事。
                        </p>
                        <p>(4)未親自經營所申請本計畫補助之事業者。</p>
                        <p>(5)經營不善或其他原因致停業或歇業。</p>
                        <p>(6)營業行為違反公共秩序善良風俗者。</p>
                        <p>
                          (7)留才獎勵之核准人員未於該車行就業連滿至少6個月，或另轉調他行重複申請補助。
                        </p>
                        <p>
                          (8)設備補助項目不符經濟部核定公告者及各車廠認可者，並有違補助遵循事項。
                        </p>
                        <p>(9)未依本計畫規定提出申請、核銷或逾期未完成核銷。</p>
                        <p>(10)規避、妨礙或拒絕本府派員查核。</p>
                        <p>(11)其他違反本計畫所訂事項及本府函知應遵守事項。</p>
                      </div>
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 font-bold">⚠️ 重要提醒：</p>
                        <p className="text-red-600">
                          ※ 不符申請資格、未符合本計畫補助條件，或於申請、核銷過程中有違反本計畫相關規定或提供虛偽資料情事者，將不予核准或取消補助資格，並依法追回相關補助款項，申請人應自負相關法律責任。
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 撥款程序 */}
              <div className={collapseStyle}>
                <div
                  className={headerClassName}
                  onClick={() => handleToggle("payment")}
                >
                  {renderCollapseHeader(
                    IconMoney,
                    "撥款程序",
                    activeKeys.payment
                  )}
                </div>
                {activeKeys.payment && (
                  <div className={contentStyle}>
                    <p className="mb-2">
                    申請者應於取得核准之次日起，依各項補助方案規定之核銷期限，完成申請改造項目或服務提升，並檢附下列文件及相關核銷文件交付本府審核：
                    </p>

                    <h3 className="font-bold text-xl">
                        【📌 核銷期限說明：】
                      </h3>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base mb-2">【產業轉型支援補助】</h3>
                      <p className="mb-2">1️⃣ 綠能轉型、設備補助：核准日起 60 日內檢附核銷文件提送至市府窗口辦理核銷。</p>
                      <p className="mb-2">2️⃣ 留才獎勵：請於114年12月1日~15日檢附核銷文件提送至市府窗口辦理核銷。</p>
                      
                      <h3 className="font-bold text-base mt-4 mb-2">【綠能交通產業推廣】（公益青年機車推廣）</h3>
                      <p className="mb-2">1️⃣ 每月月底市府通知後，應於隔月1日至10日內完成核銷。</p>
                      <p className="mb-2">2️⃣ 應於通知日起3個月內完成核銷，逾期不受理。</p>
                    </div>
                    <h3 className="font-bold text-xl">
                        【📌 撥款核銷應備文件：】
                      </h3>
                    <div className="space-y-1">
                      <p>1️⃣ 證明文件審核表（附件3）</p>
                      <p>2️⃣ 產業轉型支援補助請領申請表（附件6-1）</p>
                      <p>3️⃣ 綠能交通產業推廣請領申請表（附件6-2）</p>
                      <p>4️⃣ 本計畫領據（附件7）</p>
                      <p>
                        5️⃣ 補助函核准影本（※ 僅首次核銷時須檢附，後續核銷免附）
                      </p>
                      <p>
                        6️⃣ 申請人為戶名之金融機構指定帳號存簿封面影本（※ 僅首次核銷時須檢附，後續核銷免附）
                      </p>
                      <p>7️⃣ 其他佐證證明文件（依據本計畫核定通知內容及各補助項目相關規範辦理）</p>
                    </div>

                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-bold">⚠️  注意事項：</p>
                     
                      <p className="text-red-600">
                        ※ 核銷文件應依規定期限內完成提送，逾期未完成核銷者，視同放棄該項補助，將不予撥款。
                      </p>
                      <p className="text-red-600">
                        ※ 核銷作業須由申請人親自攜帶正本文件至市府窗口辦理現場核銷，線上平台不提供核銷作業功能。
                      </p>
                      <p className="text-red-600">
                      ※ 為避免錯失時程，請申請者應主動至「進度查詢專區」查詢，或主動致電及加入 LINE 官方帳號洽詢，市府將視作業狀況安排通知，惟不保證逐案主動通知。
                      </p>
                      <p className="text-red-600">
                      ※ 為保障申請權益，建議申請人密切留意市府通知及核銷時程，逾期未完成核銷將影響撥款權益。
                      </p>
                      </div>
                  </div>
                )}
              </div>
              {/* 撥款程序 */}
              <div className={collapseStyle}>
                <div
                  className={headerClassName}
                  onClick={() => handleToggle("service")}
                >
                  {renderCollapseHeader(
                    IconService,
                    "服務諮詢窗口",
                    activeKeys.service
                  )}
                </div>
                {activeKeys.service && (
                  <div className={contentStyle}>
                    <p className="mb-2">有任何問題歡迎聯絡申辦諮詢窗口</p>

                    <div className="space-y-1">
                      <p>
                        <span className="font-bold">主辦單位</span>
                        ｜基隆市政府－產業發展處
                      </p>
                      <p>
                        <span className="font-bold">服務電話</span>
                        ｜02-2428-9225 廖小姐
                      </p>
                      <LineContact/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={1} md={3} />
      </Row>
      <FooterBgcImg />
    </div>
  );
}

export default Description;
