import React, { useEffect, useState } from 'react'
// import useLocalStorage from "react-use-localstorage";
import { Input, Progress, Card, Checkbox, message, Drawer, Button, Image, Row, Col } from 'antd';
import { CopyOutlined, SyncOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import images from '../static/image'
import './setup.css'


export default function Daitohkigyo_setup() {

    // 本地存储 hook
    const useLocalStorage = (key, initialValue) => {
        const [state, setState] = useState(() => {
            const item = window.localStorage.getItem(key)
            const value = item === 'true' ? true : item === 'false' ? false : Number(item)
            return value ? value : initialValue
        });

        const setLocalStorageState = (newState) => {
            const newStateValue = newState
            setState(newStateValue)
            window.localStorage.setItem(key, newStateValue)
        }

        return [state, setLocalStorageState]
    }


    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    //修改PC名命令 hook
    const [pcname, setPcname] = useLocalStorage('pc-name', "");

    const [stpes, setStpes] = useLocalStorage('stpes', 0)

    //checkbox用 hook
    const [card1, setCard1] = useLocalStorage('card1', false)
    const [card2, setCard2] = useLocalStorage('card2', false)
    const [card3, setCard3] = useLocalStorage('card3', false)
    const [card4, setCard4] = useLocalStorage('card4', false)
    const [card5, setCard5] = useLocalStorage('card5', false)
    const [card6, setCard6] = useLocalStorage('card6', false)
    const [card7, setCard7] = useLocalStorage('card7', false)
    const [card8, setCard8] = useLocalStorage('card8', false)
    const [card9, setCard9] = useLocalStorage('card9', false)
    const [card10, setCard10] = useLocalStorage('card10', false)
    const [card11, setCard11] = useLocalStorage('card11', false)
    const [card12, setCard12] = useLocalStorage('card12', false)
    const [card13, setCard13] = useLocalStorage('card13', false)
    const [card14, setCard14] = useLocalStorage('card14', false)
    const [card15, setCard15] = useLocalStorage('card15', false)

    useEffect(() => {
        console.log("2022-04-12 18:43:01 🚓▲  △  ▴  ▵  ▶︎  ▷  ▸  ▹  ►  ▻:", stpes)
    })

    return (
        <div>
            <br />
            <div >
                <Button type="primary" shape="circle" icon={<SyncOutlined />} onClick={() => { setStpes(0); setCard1(false); setCard2(false); setCard3(false); setCard4(false); setCard5(false); setCard6(false); setCard7(false); setCard8(false); setCard9(false); setCard10(false); setCard11(false); setCard12(false); setCard13(false); setCard14(false); setCard15(false) }} size='small' />{' '}
                <Progress strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                    percent={100 / 15 * stpes}
                    format={() => `${stpes} /15`}
                    strokeWidth='23px'
                    style={{ width: '97%' }} />
            </div>
            <br />
            <Card className={card1 && 'checked'} title="1. DELL製PCの確認項目" extra={<Checkbox checked={card1} onChange={(e) => { setCard1(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. <a target='_blank' href='https://www.dell.com/support/kbdoc/ja-jp/000124701/%e8%87%aa%e5%8b%95-windows-%e3%83%87%e3%83%90%e3%82%a4%e3%82%b9%e6%9a%97%e5%8f%b7%e5%8c%96-dell-%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0'>BitLockerが有効なWindows10搭載して出荷されたDellシステムのファクトリーイメージに復元しようとする際にエラーが発生する現象</a></p>
                <p>2. <a target='_blank' href='https://www.dell.com/community/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%A8OS/%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%AE%E6%9A%97%E5%8F%B7%E5%8C%96%E3%82%92%E3%82%AA%E3%83%95%E3%81%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/td-p/7246036'>デバイスの暗号化をオフにする方法</a></p>
            </Card>
            <br />
            <Card className={card2 && 'checked'} title="2. ユーザー設定" extra={<Checkbox checked={card2} onChange={(e) => { setCard2(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. Microsoftアカウントでサインインはスキップしてオフラインアカウントを選択</p>
                <Row justify='start'>
                    <Col sm={24} md={12} lg={6} xl={4}>
                        <CopyToClipboard text='admin' onCopy={() => { message.success('ユーザーIDをコピーしました') }}>
                            <span className='clipy'>ID: [ admin ]</span>
                        </CopyToClipboard></Col>
                    <Col sm={24} md={12} lg={8} xl={6}>
                        <CopyToClipboard text='daitou0211' onCopy={() => { message.success('パスワードをコピーしました') }}>
                            <span className='clipy'>PW: [ daitou0211 ]</span>
                        </CopyToClipboard>
                    </Col>
                    <Col sm={24} md={12} lg={10} xl={8}>
                        <CopyToClipboard text='d a i t o u 0 2 1 1' onCopy={() => { message.success('ヒントをクリップボードにコピーしました') }}>
                            <span className='clipy'>Hint: [ d a i t o u 0 2 1 1 ]</span>
                        </CopyToClipboard>
                    </Col>
                </Row>
            </Card >
            <br />
            <Card className={card3 && 'checked'} title="3. Chromeをインストール" extra={<Checkbox checked={card3} onChange={(e) => { setCard3(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />} >
                <p className='downloady'>1. <a target='_blank' href='https://www.google.com/chrome/'>Chromeをダウンロード</a></p>
                <p>2. 既定ブラウザーに設定</p>
            </Card>
            <br />
            <Card className={card4 && 'checked'} title="4. edgeをタスクバーからピン留めを外す。" extra={<Checkbox checked={card4} onChange={(e) => { setCard4(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. アイコンを右クリック、タスクバーからピン留めを外す </p>
            </Card>
            <br />
            <Card className={card5 && 'checked'} title="5. TeamViewerをインストール" extra={<Checkbox checked={card5} onChange={(e) => { setCard5(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p className='downloady'>1. <a target='_blank' href='https://get.teamviewer.com/daitoh'>大東企業様用TeamViewerをダウンロード</a></p>
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
                <p>1. <a target='_blank' href='https://forest.watch.impress.co.jp/library/software/explzh/'>Explzh（64bit版）</a></p>
                <p>2. LZHとZIPのみ、個人使用</p>
            </Card>
            <br />
            <Card className={card7 && 'checked'} title="7. Office365をインストール" extra={<Checkbox checked={card7} onChange={(e) => { setCard7(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. <a target='_blank' href='https://www.office.com/'>office365ログインへ</a></p>
                <p>2. EXCELを開き、最初の設定を行うこと。</p>
                <p>3. サインインすること：お客さんのoffice365のメールとpw</p>
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
                <p>1. [スタート]{' => '}[設定]{' => '}[個人用設定]{' => '}[テーマ]{' => '}[デスクトップ アイコンの設定] の順に選択します。</p>
                <p>2. [デスクトップ アイコン] で、コンピューターにチェックを入れます。</p>
                <p>3. [適用]、[OK] の順に選択します。</p>
                <p><a target='_blank' href='https://support.microsoft.com/ja-jp/windows/ms-settings:themes?activationSource=SMC-IA-4027090'>個人用設定を開く</a></p>
            </Card>
            <br />
            <Card className={card11 && 'checked'} title="11. スリープ設定" extra={<Checkbox checked={card11} onChange={(e) => { setCard11(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. デスクトップの検索欄に「電源」と入力し「電源とスリープの設定」をクリック。</p>
                <p>2. 画面、スリープの時間設定をすべて「なし」にする。</p>
            </Card>
            <br />
            <Card className={card12 && 'checked'} title="12. PC名の変更" extra={<Checkbox checked={card12} onChange={(e) => { setCard12(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1.設定{' => '}システム{' => '}バージョン情報{' => '}このPC名の変更。</p>
                <p>2. 命名規則:「ブランド名-店舗名-通し番号」または「名-姓-通し番号」</p>
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
                <p><a target='_blank' href='https://support.microsoft.com/ja-jp/windows/ms-settings:windowsupdate?activationSource=SMC-IA-4027667'>Windows 更新プログラムを確認する。</a></p>
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
                <p>1. <a target='_blank' href='https://daitohkigyo.sharepoint.com/:x:/r/sites/bridge/_layouts/15/doc2.aspx?sourcedoc=%7B85A7C964-1077-41D4-8702-779AF6361880%7D&file=PC%E6%A3%9A%E5%8D%B8%E3%81%97%E4%B8%80%E8%A6%A7.xlsx&action=edit&mobileredirect=true&wdPreviousSession=3adf76f9-cbe6-4f8e-8257-032f66502424&wdOrigin=TEAMS-ELECTRON.teams.undefined'>PC棚卸し一覧.xlsx</a>に情報を記入する</p>
                <p>2. 上記エクセル中の管理番号をPCに貼ります。</p>
            </Card>
            <Drawer size='large' title="Outlook設定手順" placement="right" onClose={onClose} visible={visible}>
                <h2>1. Outlookの起動</h2>
                <Image
                    src={images.outlook1}
                />
                <h2>2. 情報に移動</h2>
                <Image
                    src={images.outlook2}
                />
                <h2>3. アカウントの追加</h2>
                <Image
                    src={images.outlook3}
                />
                <h2>4. 詳細オプションを開き、チェックボックスをチェック</h2>
                <Image
                    src={images.outlook4}
                />
                <h2>5. メールアドレスを入力</h2>
                <Image
                    src={images.outlook5}
                />
                <h2>6. IMAPを選択</h2>
                <Image
                    src={images.outlook6}
                />
                <h2>7. メールサーバー情報を入力</h2>
                <CopyToClipboard text='pop3.heteml.jp' onCopy={() => { message.success('受信サーバーをコピーしました') }}>
                    <p className='clipy'>大東企業受信サーバー: [ pop3.heteml.jp ]</p>
                </CopyToClipboard>
                <CopyToClipboard text='smtp.heteml.jp' onCopy={() => { message.success('送信サーバーをコピーしました') }}>
                    <p className='clipy'>大東企業送信サーバー: [ smtp.heteml.jp ]</p>
                </CopyToClipboard>
                <Image
                    src={images.outlook7}
                />
                <h2>8. パスワードを入力</h2>
                <Image
                    src={images.outlook8}
                />
                <h2>9. 登録完了</h2>
                <Image
                    src={images.outlook9}
                />
                <h2>10. ファイルをクリック</h2>
                <Image
                    src={images.outlook10}
                />
                <h2>11. アカウントの設定をクリック</h2>
                <Image
                    src={images.outlook11}
                />
                <h2>12. メールアドレスをクリック</h2>
                <Image
                    src={images.outlook12}
                />
                <h2>13. 「inbox」を入力</h2>
                <Image
                    src={images.outlook13}
                />
                <h2>14. 完了をクリック</h2>
                <Image
                    src={images.outlook14}
                />
            </Drawer>
            <br />
        </div >
    )
}
