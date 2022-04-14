import React, { useEffect, useState, createContext } from 'react'
import { BackTop, Affix, Input, Tooltip, Progress, Card, Checkbox, message, Button, Row, Col } from 'antd';
import { CopyOutlined, SyncOutlined, MacCommandOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useLocalStorage from '../util';
import DaitohkigyoOutlookDrawer from '../components/Drawer'

import './setup.css'

export const outlookDrawerContext = createContext()

export default function Daitohkigyo_setup() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    //修改PC名命令 hook
    const [pcname, setPcname] = useLocalStorage('pc-name', "");

    // 配置进度 hook
    const [stpes, setStpes] = useLocalStorage('daitohkigyo_stpes', 0)

    //checkbox用 hook
    const [card1, setCard1] = useLocalStorage('daitohkigyo_card1', false)
    const [card2, setCard2] = useLocalStorage('daitohkigyo_card2', false)
    const [card3, setCard3] = useLocalStorage('daitohkigyo_card3', false)
    const [card4, setCard4] = useLocalStorage('daitohkigyo_card4', false)
    const [card5, setCard5] = useLocalStorage('daitohkigyo_card5', false)
    const [card6, setCard6] = useLocalStorage('daitohkigyo_card6', false)
    const [card7, setCard7] = useLocalStorage('daitohkigyo_card7', false)
    const [card8, setCard8] = useLocalStorage('daitohkigyo_card8', false)
    const [card9, setCard9] = useLocalStorage('daitohkigyo_card9', false)
    const [card10, setCard10] = useLocalStorage('daitohkigyo_card10', false)
    const [card11, setCard11] = useLocalStorage('daitohkigyo_card11', false)
    const [card12, setCard12] = useLocalStorage('daitohkigyo_card12', false)
    const [card13, setCard13] = useLocalStorage('daitohkigyo_card13', false)
    const [card14, setCard14] = useLocalStorage('daitohkigyo_card14', false)
    const [card15, setCard15] = useLocalStorage('daitohkigyo_card15', false)

    useEffect(() => {
        console.log("2022-04-12 18:43:01 🚓▲  △  ▴  ▵  ▶︎  ▷  ▸  ▹  ►  ▻:", stpes)
    })

    return (
        <>
            <br />
            <Affix offsetTop={0}>
                <div >
                    <Button shape="circle" icon={<SyncOutlined />} style={{ backgroundColor: 'yellowgreen' }} onClick={() => { setStpes(0); setCard1(false); setCard2(false); setCard3(false); setCard4(false); setCard5(false); setCard6(false); setCard7(false); setCard8(false); setCard9(false); setCard10(false); setCard11(false); setCard12(false); setCard13(false); setCard14(false); setCard15(false) }} size='small' />{' '}
                    <Progress strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                        percent={100 / 15 * stpes}
                        format={() => `${stpes} /15`}
                        strokeWidth='23px'
                        style={{ width: '90%' }} />
                </div>
            </Affix>
            <br />
            <Card className={card1 && 'checked'} title="1. DELL製PCの確認項目" extra={<Checkbox checked={card1} onChange={(e) => { setCard1(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. <a target='_blank' rel="noreferrer" href='https://www.dell.com/support/kbdoc/ja-jp/000124701/%e8%87%aa%e5%8b%95-windows-%e3%83%87%e3%83%90%e3%82%a4%e3%82%b9%e6%9a%97%e5%8f%b7%e5%8c%96-dell-%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0'>BitLockerが有効なWindows10搭載して出荷されたDellシステムのファクトリーイメージに復元しようとする際にエラーが発生する現象</a></p>
                <p>2. <a target='_blank' rel="noreferrer" href='https://www.dell.com/community/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%A8OS/%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%AE%E6%9A%97%E5%8F%B7%E5%8C%96%E3%82%92%E3%82%AA%E3%83%95%E3%81%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/td-p/7246036'>デバイスの暗号化をオフにする方法</a></p>
            </Card>
            <br />
            <Card className={card2 && 'checked'} title="2. ユーザー設定" extra={<Checkbox checked={card2} onChange={(e) => { setCard2(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. Microsoftアカウントでサインインはスキップしてオフラインアカウントを選択</p>
                <Row justify='start'>
                    <Col sm={24} md={12} lg={6} xl={4}>
                        ID:
                        <CopyToClipboard text='admin' onCopy={() => { message.success('ユーザーIDをコピーしました') }}>
                            <Tooltip title="click to copy">
                                <span className='clipy'>admin</span>
                            </Tooltip>
                        </CopyToClipboard></Col>
                    <Col sm={24} md={12} lg={8} xl={6}>
                        PW:
                        <CopyToClipboard text='daitou0211' onCopy={() => { message.success('パスワードをコピーしました') }}>
                            <Tooltip title="click to copy">
                                <span className='clipy'>daitou0211</span>
                            </Tooltip>
                        </CopyToClipboard>
                    </Col>
                    <Col sm={24} md={12} lg={10} xl={8}>
                        Hint:
                        <CopyToClipboard text='d a i t o u 0 2 1 1' onCopy={() => { message.success('ヒントをクリップボードにコピーしました') }}>
                            <Tooltip title="click to copy">
                                <span className='clipy'>d a i t o u 0 2 1 1</span>
                            </Tooltip>
                        </CopyToClipboard>
                    </Col>
                </Row >
                <br />
                <p><a target='_blank' rel="noreferrer" href='ms-settings:signinoptions'>サインイン オプションを開く</a></p>
            </Card >
            <br />
            <Card className={card3 && 'checked'} title="3. Chromeをインストール" extra={<Checkbox checked={card3} onChange={(e) => { setCard3(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />} >
                <p className='downloady'>1. <a target='_blank' rel="noreferrer" href='https://www.google.com/chrome/'>Chromeをダウンロード</a></p>
                <p>2. 既定ブラウザーに設定</p>
            </Card>
            <br />
            <Card className={card4 && 'checked'} title="4. edgeをタスクバーからピン留めを外す。" extra={<Checkbox checked={card4} onChange={(e) => { setCard4(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. アイコンを右クリック、タスクバーからピン留めを外す </p>
            </Card>
            <br />
            <Card className={card5 && 'checked'} title="5. TeamViewerをインストール" extra={<Checkbox checked={card5} onChange={(e) => { setCard5(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p className='downloady'>1. <a target='_blank' rel="noreferrer" href='https://get.teamviewer.com/daitoh'>大東企業様用TeamViewerをダウンロード</a></p>
                <div>
                    <Input.Group compact>
                        <Input
                            style={{ width: 'auto' }}
                            value="Bridge2019!2"
                        />
                        <CopyToClipboard text="Bridge2019!2" onCopy={() => { message.success('パスワードをクリップボードにコピーしました') }}>
                            <Button icon={<CopyOutlined />} />
                        </CopyToClipboard>
                    </Input.Group>
                </div>
            </Card>
            <br />
            <Card className={card6 && 'checked'} title="6. explzhをインストール" extra={<Checkbox checked={card6} onChange={(e) => { setCard6(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. <a target='_blank' rel="noreferrer" href='https://forest.watch.impress.co.jp/library/software/explzh/'>Explzh（64bit版）</a></p>
                <p>2. LZHとZIPのみ、個人使用</p>
            </Card>
            <br />
            <Card className={card7 && 'checked'} title="7. Office365をインストール" extra={<Checkbox checked={card7} onChange={(e) => { setCard7(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. <a target='_blank' rel="noreferrer" href='https://www.office.com/'>office365ログインへ</a></p>
                <p>2. EXCELを開き、最初の設定を行うこと。</p>
                <p>3. サインインすること:お客さんのoffice365のメールとpw</p>
                <p>4. サインインしていない場合は、右上のサインインをクリックして、サインインすること</p>
            </Card>
            <br />
            <Card className={card8 && 'checked'} title="8. メール（Outlook）の設定" extra={<Checkbox checked={card8} onChange={(e) => { setCard8(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <div>
                    <span>1. 大東企業受信サーバー:</span>
                    <Input.Group compact>
                        <Input
                            style={{ width: 'auto' }}
                            value="pop3.heteml.jp"
                        />
                        <CopyToClipboard text="pop3.heteml.jp" onCopy={() => { message.success('受信サーバーをコピーしました') }}>
                            <Button icon={<CopyOutlined />} />
                        </CopyToClipboard>
                    </Input.Group>
                </div>
                <br />
                <div>
                    <span>2. 大東企業送信サーバー:</span>
                    <Input.Group compact>
                        <Input
                            style={{ width: 'auto' }}
                            value="smtp.heteml.jp"
                        />
                        <CopyToClipboard text="smtp.heteml.jp" onCopy={() => { message.success('送信サーバーをコピーしました') }}>
                            <Button icon={<CopyOutlined />} />
                        </CopyToClipboard>
                    </Input.Group>
                </div>
                <br />
                <div>
                    <Button type="primary" onClick={showDrawer}>
                        手順を開く
                    </Button>
                </div>
            </Card >
            <br />
            <Card className={card9 && 'checked'} title="9. OneDriveのショートカットを作成" extra={<Checkbox checked={card9} onChange={(e) => { setCard9(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>※「デスクトップ」「ドキュメント」「写真」フォルダのチェックを外してください</p>
                <p>1. ChromeにてOffice365にサインイン</p>
                <p>2. 必ず、「サインインしたままにする」にチェックを入れること。</p>
                <p>3. OneDriveにはいる</p>
                <p>4. 左下の「従来のOneDriveに戻す」をクリック</p>
                <p>5. 各グループのショートカットをデスクトップに作成（その他のツール ⇨ ショートカットを作成）</p>
                <p>6. EXCELが開くかチェックする。</p>
            </Card>
            <br />
            <Card className={card10 && 'checked'} title="10. デスクトップにPCのアイコンを表示する" extra={<Checkbox checked={card10} onChange={(e) => { setCard10(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. [スタート] ⇨ [設定] ⇨ [個人用設定] ⇨ [テーマ] ⇨ [デスクトップ アイコンの設定] の順に選択します。</p>
                <p>2. [デスクトップ アイコン] で、コンピューターにチェックを入れます。</p>
                <p>3. [適用]、[OK] の順に選択します。</p>
                <p><a target='_blank' rel="noreferrer" href='ms-settings:themes?activationSource=SMC-IA-4027090'>個人用設定を開く</a></p>
            </Card>
            <br />
            <Card className={card11 && 'checked'} title="11. スリープ設定" extra={<Checkbox checked={card11} onChange={(e) => { setCard11(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. デスクトップの検索欄に「電源」と入力し「電源とスリープの設定」をクリック。</p>
                <p>2. 画面、スリープの時間設定をすべて「なし」にする。</p>
                <p><a target='_blank' rel="noreferrer" href='ms-settings:powersleep'>電源とスリープを開く</a></p>
                <h2>画面</h2>
                <p>
                    <CopyToClipboard text='powercfg /change monitor-timeout-dc 0' onCopy={() => { message.success('コメントをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>次の時間が経過後、ディスプレイの電源を切る(バッテリー駆動時)。</span>
                        </Tooltip>
                    </CopyToClipboard>

                </p>
                <p>
                    <CopyToClipboard text='powercfg /change monitor-timeout-ac 0' onCopy={() => { message.success('コメントをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>次の時間が経過後、ディスプレイの電源を切る(電源に接続時)。</span>
                        </Tooltip>
                    </CopyToClipboard>

                </p>
                <h2>スリープ</h2>
                <p>
                    <CopyToClipboard text='powercfg /change standby-timeout-dc 0' onCopy={() => { message.success('コメントをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>次の時間が経過後、PCをスリープ状態にする(バッテリー駆動時)。</span>
                        </Tooltip>
                    </CopyToClipboard>

                </p>
                <p>
                    <CopyToClipboard text='powercfg /change standby-timeout-ac 0' onCopy={() => { message.success('コメントをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>次の時間が経過後、PCをスリープ状態にする(電源に接続時)。</span>
                        </Tooltip>
                    </CopyToClipboard>

                </p>
            </Card>
            <br />
            <Card className={card12 && 'checked'} title="12. PC名の変更" extra={<Checkbox checked={card12} onChange={(e) => { setCard12(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. 設定 ⇨システム ⇨バージョン情報 ⇨このPC名の変更。</p>
                <p>2. 命名規則:「ブランド名-店舗名-通し番号」または「名-姓-通し番号」</p>
                <p><a target='_blank' rel="noreferrer" href='ms-settings:about'>システムバージョン情報を開く</a></p>
                <Input.Group compact>
                    <Input
                        style={{ width: 'auto' }}
                        value={pcname}
                        onChange={(pcname) => {
                            setPcname(pcname.target.value)
                        }}
                    />
                    <CopyToClipboard text={"wmic computersystem where name=\"%computername%\" call rename name=\"" + pcname + "\""} onCopy={() => { message.success('PC名をクリップボードにコピーしました') }}>
                        <Button icon={<CopyOutlined />} />
                    </CopyToClipboard>
                </Input.Group>
            </Card>
            <br />
            <Card className={card13 && 'checked'} title="13. Windows Updateを行う" extra={<Checkbox checked={card13} onChange={(e) => { setCard13(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p><a target='_blank' rel="noreferrer" href='ms-settings:windowsupdate?activationSource=SMC-IA-4027667'>Windows 更新プログラムを確認する。</a></p>
            </Card>
            <br />
            <Card className={card14 && 'checked'} title="14. ダウンロードフォルダ内に入っているファイルを全削除する" extra={<Checkbox checked={card14} onChange={(e) => { setCard14(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. adminフォルダ内で以下のコマンドを実行します。</p>
                <Input.Group compact>
                    <Input
                        style={{ width: 'auto' }}
                        value="rd /s Downloads & mkdir Downloads"
                    />
                    <CopyToClipboard text="rd /s Downloads & mkdir Downloads" onCopy={() => { message.success('コメントをクリップボードにコピーしました') }}>
                        <Button icon={<CopyOutlined />} />
                    </CopyToClipboard>
                </Input.Group>
            </Card>
            <br />
            <Card className={card15 && 'checked'} title="15. 大東さん管理のエクセルに情報を記入" extra={<Checkbox checked={card15} onChange={(e) => { setCard15(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. <a target='_blank' rel="noreferrer" href='https://daitohkigyo.sharepoint.com/:x:/r/sites/bridge/_layouts/15/doc2.aspx?sourcedoc=%7B85A7C964-1077-41D4-8702-779AF6361880%7D&file=PC%E6%A3%9A%E5%8D%B8%E3%81%97%E4%B8%80%E8%A6%A7.xlsx&action=edit&mobileredirect=true&wdPreviousSession=3adf76f9-cbe6-4f8e-8257-032f66502424&wdOrigin=TEAMS-ELECTRON.teams.undefined'>PC棚卸し一覧.xlsx</a>に情報を記入する</p>
                <p>2. 上記エクセル中の管理番号をPCに貼ります。</p>
            </Card>
            <br />
            <outlookDrawerContext.Provider value={{ onClose, visible }}>
                <DaitohkigyoOutlookDrawer />
            </outlookDrawerContext.Provider>
            <BackTop />
        </ >
    )
}
