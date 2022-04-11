import { Redirect } from "react-router-dom";
import Daitohkigyo_setup from "../pages/Daitohkigyo_setup"
import Dinamix_setup from "../pages/Dinamix_setup"
import MailForm from "../pages/MailForm"
import MailList from "../pages/MailList"
import Setup from "../pages/setup"

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/setup" />
        )
    },
    {
        path: "/mailform",
        component: MailForm
    },
    {
        path: "/maillist",
        component: MailList
    },
    {
        path: "/setup",
        component: Setup,
        routes: [
            {
                path: "/setup",
                exact: true,
                render: () => (
                    <Redirect to="/setup/daitohkigyo" />
                )
            },
            {
                path: "/setup/daitohkigyo",
                component: Daitohkigyo_setup
            },
            {
                path: "/setup/dinamix",
                component: Dinamix_setup
            }
        ]
    }
]

export default routes