import React, { useState } from 'react'
import { Tooltip, Progress, Card, Checkbox, message, Drawer, Button, Image, Row, Col } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import images from '../static/image'
import './setup.css'

export default function Daitohkigyo_setup() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="site-card-border-less-wrapper">
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                    percent={10 / 0.1} />
            </Tooltip>
            <br />
            <br />
            <Card title="1. DELL製PCの確認項目" extra={<Checkbox />}>
                <p>1. <a target='_blank' href='https://www.dell.com/support/kbdoc/ja-jp/000124701/%e8%87%aa%e5%8b%95-windows-%e3%83%87%e3%83%90%e3%82%a4%e3%82%b9%e6%9a%97%e5%8f%b7%e5%8c%96-dell-%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0'>BitLockerが有効なWindows10搭載して出荷されたDellシステムのファクトリーイメージに復元しようとする際にエラーが発生する現象</a></p>
                <p>2. <a target='_blank' href='https://www.dell.com/community/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%A8OS/%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%AE%E6%9A%97%E5%8F%B7%E5%8C%96%E3%82%92%E3%82%AA%E3%83%95%E3%81%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/td-p/7246036'>デバイスの暗号化をオフにする方法</a></p>
            </Card>
            <br />
            <Card title="2. ユーザー設定" extra={<Checkbox />}>
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
            <Card title="Chromeをインストール" extra={<Checkbox />}>
                <span className='downloady'><a target='_blank' href='https://www.google.com/chrome/'>Chromeをダウンロード</a></span>
            </Card>
            <br />
            <Card title="edgeをタスクバーからピン留めを外す。" extra={<Checkbox />}>
                <p>1. アイコンを右クリック、タスクバーからピン留めを外す </p>
            </Card>
            <br />
            <Card title="TeamViewerをインストール" extra={<Checkbox />}>
                <span className='downloady'><a target='_blank' href='https://get.teamviewer.com/daitoh'>TeamViewerをダウンロード</a></span>
                <Row justify='start'>
                    <Col sm={24} md={12} lg={6} xl={4}>
                        <CopyToClipboard text='Bridge2019!2' onCopy={() => { message.success('パスワードをクリップボードにコピーしました') }}>
                            <span className='clipy'>パスワード: [ Bridge2019!2 ]</span>
                        </CopyToClipboard>
                    </Col>
                </Row>
            </Card>
            <br />
            <Card title="explzhをインストール" extra={<Checkbox />}>
                <p><a target='_blank' href='https://forest.watch.impress.co.jp/library/software/explzh/'>download</a></p>
                <p>LZHとZIPのみ、個人使用</p>
            </Card>
            <br />
            <Card title="Office365をインストール" extra={<Checkbox />}>
                <p><a target='_blank' href='https://www.office.com/'>office365ログインへ</a></p>
                <p>EXCELを開き、最初の設定を行うこと。</p>
                <p>サインインすること：お客さんのoffice365のメールとpw</p>
                <p>サインインしていない場合は、右上のサインインをクリックして、サインインすること</p>
            </Card>
            <br />
            <Card title="メール（Outlook）の設定" extra={<Checkbox />}>
                <Row>
                    <Col span={24}>
                        <CopyToClipboard text='pop3.heteml.jp' onCopy={() => { message.success('受信サーバーをコピーしました') }}>
                            <span className='clipy'>大東企業受信サーバー: [ pop3.heteml.jp ]</span>
                        </CopyToClipboard>
                    </Col>
                    <Col span={24}>
                        <CopyToClipboard text='smtp.heteml.jp' onCopy={() => { message.success('送信サーバーをコピーしました') }}>
                            <span className='clipy'>大東企業送信サーバー: [ smtp.heteml.jp ]</span>
                        </CopyToClipboard>
                    </Col>
                </Row>
                <br></br>
                <Button type="primary" onClick={showDrawer}>
                    手順を開く
                </Button>
            </Card>
            <br />
            <Card title="OneDriveのショートカットを作成" extra={<Checkbox />}>
                <p>「デスクトップ」「ドキュメント」「写真」フォルダのチェックを外してください</p>
                <p>1. ChromeにてOffice365にサインイン</p>
                <p>2. 必ず、「サインインしたままにする」にチェックを入れること。</p>
                <p>3. OneDriveにはいる</p>
                <p>4. 左下の「従来のOneDriveに戻す」をクリック</p>
                <p>5. 各グループのショートカットをデスクトップに作成（その他のツール ⇨ ショートカットを作成）</p>
                <p>6. EXCELが開くかチェックする。</p>
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
        </div >
    )
}
