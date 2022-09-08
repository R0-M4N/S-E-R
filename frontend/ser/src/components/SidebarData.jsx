import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Video',
                path: '/video',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Swapper',
        path: '/swap',
        icon: <AiIcons.AiFillHome />,
    }
];

export default SidebarData;