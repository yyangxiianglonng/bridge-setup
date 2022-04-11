import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { NavLink } from 'react-router-dom';
import {
    DiscoverWrapper,
    TopMenu
} from './style';

export default memo(function Setup(props) {
    const { route } = props;

    const setupMenu = [
        {
            title: "大東企業",
            link: "/setup/daitohkigyo"
        },
        {
            title: "ダイナミクス",
            link: "/setup/dinamix"
        },
        {
            title: "予備",
            link: "/setup/songs"
        },
    ]

    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        setupMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})

