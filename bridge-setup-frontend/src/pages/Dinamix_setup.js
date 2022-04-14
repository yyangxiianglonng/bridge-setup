import React, { useState } from 'react'
import { BackTop, Affix, Input, Tooltip, Progress, Card, Checkbox, message, Button, Row, Col } from 'antd';
import { CopyOutlined, SyncOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useLocalStorage from '../util';
import './setup.css'

export default function Dinamix_setup() {
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
    const [stpes, setStpes] = useLocalStorage('dinamix_stpes', 0)

    //checkbox用 hook
    const [card1, setCard1] = useLocalStorage('dinamix_card1', false)
    const [card2, setCard2] = useLocalStorage('dinamix_card2', false)
    const [card3, setCard3] = useLocalStorage('dinamix_card3', false)
    const [card4, setCard4] = useLocalStorage('dinamix_card4', false)
    const [card5, setCard5] = useLocalStorage('dinamix_card5', false)
    const [card6, setCard6] = useLocalStorage('dinamix_card6', false)
    const [card7, setCard7] = useLocalStorage('dinamix_card7', false)
    const [card8, setCard8] = useLocalStorage('dinamix_card8', false)
    const [card9, setCard9] = useLocalStorage('dinamix_card9', false)
    const [card10, setCard10] = useLocalStorage('dinamix_card10', false)
    const [card11, setCard11] = useLocalStorage('dinamix_card11', false)
    const [card12, setCard12] = useLocalStorage('dinamix_card12', false)
    const [card13, setCard13] = useLocalStorage('dinamix_card13', false)
    const [card14, setCard14] = useLocalStorage('dinamix_card14', false)
    const [card15, setCard15] = useLocalStorage('dinamix_card15', false)
    const [card16, setCard16] = useLocalStorage('dinamix_card16', false)
    const [card17, setCard17] = useLocalStorage('dinamix_card17', false)
    const [card18, setCard18] = useLocalStorage('dinamix_card18', false)
    const [card19, setCard19] = useLocalStorage('dinamix_card19', false)
    const [card20, setCard20] = useLocalStorage('dinamix_card20', false)

    return (
        <div>
            <br />
            <Affix offsetTop={0}>
                <div >
                    <Button shape="circle" icon={<SyncOutlined />} style={{ backgroundColor: 'red' }} onClick={() => { setStpes(0); setCard1(false); setCard2(false); setCard3(false); setCard4(false); setCard5(false); setCard6(false); setCard7(false); setCard8(false); setCard9(false); setCard10(false); setCard11(false); setCard12(false); setCard13(false); setCard14(false); setCard15(false); setCard16(false); setCard17(false); setCard18(false); setCard19(false); setCard20(false) }} size='small' />{' '}
                    <Progress strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                        percent={100 / 20 * stpes}
                        format={() => `${stpes} /20`}
                        strokeWidth='23px'
                        style={{ width: '90%' }}
                    />

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
                        <CopyToClipboard text='dina4600' onCopy={() => { message.success('パスワードをコピーしました') }}>
                            <Tooltip title="click to copy">
                                <span className='clipy'>dina4600</span>
                            </Tooltip>
                        </CopyToClipboard>
                    </Col>
                    <Col sm={24} md={12} lg={10} xl={8}>
                        Hint:
                        <CopyToClipboard text='d i n a 4 6 0 0' onCopy={() => { message.success('ヒントをクリップボードにコピーしました') }}>
                            <Tooltip title="click to copy">
                                <span className='clipy'>d i n a 4 6 0 0</span>
                            </Tooltip>
                        </CopyToClipboard>
                    </Col>
                </Row>
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
                <p className='downloady'>1. <a target='_blank' rel="noreferrer" href='https://get.teamviewer.com/dinamix'>ダイナミクス様用TeamViewerをダウンロード</a></p>
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
                    <span>1. ダイナミクス受信サーバー:</span>
                    <Input.Group compact>
                        <Input
                            style={{ width: 'auto' }}
                            value="未定"
                        />
                        <CopyToClipboard text="未定" onCopy={() => { message.success('受信サーバーをコピーしました') }}>
                            <Button icon={<CopyOutlined />} />
                        </CopyToClipboard>
                    </Input.Group>
                </div>
                <br />
                <div>
                    <span>2. ダイナミクス送信サーバー:</span>
                    <Input.Group compact>
                        <Input
                            style={{ width: 'auto' }}
                            value="未定"
                        />
                        <CopyToClipboard text="未定" onCopy={() => { message.success('送信サーバーをコピーしました') }}>
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
            <Card className={card9 && 'checked'} title="9. LibreOfficeインストール（店舗用のみ）" extra={<Checkbox checked={card9} onChange={(e) => { setCard9(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p className='downloady'>1. <a target='_blank' rel="noreferrer" href='https://forest.watch.impress.co.jp/library/software/libreoffice/'>LibreOfficeをダウンロード</a></p>

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
                <p>2. 命名規則:「PC+店舗番号(数字4桁)」または「PC社員番号(数字6桁)」</p>
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
            <Card className={card13 && 'checked'} title="13. Adobe Acrobat Readerをインストール" extra={<Checkbox checked={card13} onChange={(e) => { setCard13(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. インストーラーダウンロードの際にMcAfeeのチェックをすべて外しておく。</p>
                <p>2. デフォルトのPDFビューワーアプリとしておく.</p>
                <p><a target='_blank' rel="noreferrer" href='https://get.adobe.com/jp/reader/otherversions/'>Adobe Acrobat Readerをダウンロード</a></p>
            </Card>
            <br />
            <Card className={card14 && 'checked'} title="14. R2本部or店舗システムをインストール" extra={<Checkbox checked={card14} onChange={(e) => { setCard14(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. 「管理者として実行」でインストールする。</p>
                <p>2. 完了後起動し、ログインまで進むか確認する。</p>
                <p><a target='_blank' rel="noreferrer" href=''>R2本部インストーラをダウンロード</a></p>
                <p><a target='_blank' rel="noreferrer" href=''>R2店舗インストーラをダウンロード</a></p>
            </Card>
            <br />
            <Card className={card15 && 'checked'} title="15. アンチウィルスソフトの設定（本部用のみ）" extra={<Checkbox checked={card15} onChange={(e) => { setCard15(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. 元々PCに入っているマカフィーをアンインストールする。</p>
                <p>2.<a target='_blank' rel="noreferrer" href='https://virusbuster.jp/vb/trial/trialthanks/trialthanks_organic.htm'> ウイルスバスターをダウンロードする。</a></p>
                <p>3. メールアドレス
                    <CopyToClipboard text='kurihara@bridge.vc' onCopy={() => { message.success('メールアドレスをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>kurihara@bridge.vc</span>
                        </Tooltip>
                    </CopyToClipboard>。</p>
                <p>4. ランサムウェア「今後は表示しない」 ⇨ 閉じる。</p>
                <p>5. <a target='_blank' rel="noreferrer" href='https://www.bridge-support.com/'>ブリッジサポートサイト</a>を参考してシリアル番号を入力。</p>
                <p>6. ※初めてのシリアル番号を登録する際にID:
                    <CopyToClipboard text='kurihara@bridge.vc' onCopy={() => { message.success('メールアドレスをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>kurihara@bridge.vc</span>
                        </Tooltip>
                    </CopyToClipboard>
                    とPW:
                    <CopyToClipboard text='Bridge@2008' onCopy={() => { message.success('パスワードをコピーしました') }}>
                        <Tooltip title="click to copy">
                            <span className='clipy'>Bridge@2008</span>
                        </Tooltip>
                    </CopyToClipboard>を入力。</p>
                <p>7. セキュリティレポート ⇨ 受け取る。</p>
                <p>8. 識別用ニックネーム ⇨ PC名のまま変更なし。</p>
                <p>9. 保護を有効にする。</p>
                <p>10. キャンペーン情報のチェックを外す。</p>
            </Card>
            <br />
            <Card className={card16 && 'checked'} title="16. Windows Updateを行う" extra={<Checkbox checked={card16} onChange={(e) => { setCard16(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p><a target='_blank' rel="noreferrer" href='ms-settings:windowsupdate?activationSource=SMC-IA-4027667'>Windows 更新プログラムを確認する。</a></p>
            </Card>
            <br />
            <Card className={card17 && 'checked'} title="17. ダウンロードフォルダ内に入っているファイルを全削除する" extra={<Checkbox checked={card17} onChange={(e) => { setCard17(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
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
            <Card className={card18 && 'checked'} title="18. ゴミ箱を空にする" extra={<Checkbox checked={card18} onChange={(e) => { setCard18(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
            </Card>
            <br />
            <Card className={card19 && 'checked'} title="19. 店舗送付状を同封する" extra={<Checkbox checked={card19} onChange={(e) => { setCard19(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1.<a target='_blank' rel="noreferrer" href='https://bridge2008.sharepoint.com/:b:/s/msteams_ef4e7a/EWOwuv4TZ8hIvpxlHUq65z4BV_HGXcKhwkVQrNMy-UItZg?e=gDsbeO'> 店舗送付状</a>を印刷する。</p>
            </Card>
            <br />
            <Card className={card20 && 'checked'} title="20. セットアップしたPC情報を社内・共有資料に記載する" extra={<Checkbox checked={card20} onChange={(e) => { setCard20(e.target.checked); e.target.checked ? setStpes(stpes + 1) : setStpes(stpes - 1) }} />}>
                <p>1. ダイナミクスお客様共有<a target='_blank' rel="noreferrer" href='https://bridge70.backlog.jp/wiki/D_CUST/Home#__wiki_header_8'>Wiki</a>。</p>
                <p>2. BRIDGE SUPPORT<a target='_blank' rel="noreferrer" href='https://www.bridge-support.com/pcs'>機器</a>画面でシリアルを検索し、あれば更新、無ければ新規登録する。</p>
            </Card>
            <br />
            <BackTop />
        </div >
    )
}
