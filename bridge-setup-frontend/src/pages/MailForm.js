/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-15 17:48:46
 * @LastEditTime: 2022-03-15 17:50:32
 * @FilePath: /bridge-setup/bridge-setup-frontend/src/pages/Mailform.js
 */
import { Form, Input, Button } from 'antd';
export default function MailForm() {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    return (
        <Form {...layout} name="nest-messages" validateMessages={validateMessages} style={{ marginTop: '60px' }}>
            <Form.Item name={['user', 'name']} label="顧客名" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="メール" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'office365']} label="office365" rules={[{ type: 'number' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Submit
                </Button>
            </Form.Item>
        </Form >
    )
}