import React from 'react'
import { Tooltip, Progress, Card, Checkbox } from 'antd';
import { CopyToClipboard, Toast } from 'react-copy-to-clipboard'

export default function Daitohkigyo_setup() {

    return (
        <div>
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                    percent={9 / 0.1} />
            </Tooltip>
            <br />
            <br />
            <Card title="DELL製PCの確認項目" extra={<Checkbox />} style={{ width: '100%' }}>
                <p>BitLockerが有効なWindows10搭載して出荷されたDellシステムのファクトリーイメージに復元しようとする際にエラーが発生する現象</p>
                <p>デバイスの暗号化をオフにする方法</p>
            </Card>
            <br />
            <Card title="ユーザー設定" extra={<Checkbox />} style={{ width: '100%' }}>
                <p>Microsoftアカウントでサインインはスキップしてオフラインアカウントを選択</p>
                <CopyToClipboard text='admin' onCopy={() => { alert("已复制") }}>
                    <p>ユーザー名: admin</p>
                </CopyToClipboard>
                <CopyToClipboard text='daitou0211' onCopy={() => { alert("已复制") }}>
                    <p>パスワード: daitou0211</p>
                </CopyToClipboard>
                <CopyToClipboard text='d a i t o u 0 2 1 1' onCopy={() => { alert("已复制") }}>
                    <p>ヒント: d a i t o u 0 2 1 1</p>
                </CopyToClipboard>
            </Card >
        </div >
    )
}
