import Daitohkigyo_setup from "../pages/Daitohkigyo_setup"
import MailForm from "../pages/MailForm"
import MailList from "../pages/MailList"

const routes = [
    {
        path: "/mailform",
        component: MailForm
    },
    {
        path: "/maillist",
        component: MailList
    },
    {
        path: "/daitohkigyo",
        component: Daitohkigyo_setup
    }
]

export default routes