import React, { useContext } from 'react'
import { Drawer, Image, } from 'antd';
import { outlookDrawerContext } from '../pages/Daitohkigyo_setup'
import images from '../static/image'

export default function DaitohkigyoOutlookDrawer() {
    const { onClose, visible } = useContext(outlookDrawerContext)
    return (
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
    )
}


