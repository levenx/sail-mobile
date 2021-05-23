import React, { FC, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faQuestionCircle,
    faRegistered,
    faAddressCard,
    faAngry,
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowAltCircleUp,
    faBell,
    faBellSlash,
    faBookmark,
    faBuilding,
    faCalendar,
    faCalendarAlt,
    faCalendarCheck,
    faCalendarMinus,
    faCalendarPlus,
    faCalendarTimes,
    faCaretSquareDown,
    faCaretSquareLeft,
    faCaretSquareRight,
    faCaretSquareUp,
    faChartBar,
    faCheckCircle,
    faCheckSquare,
    faCircle,
    faClock,
    faClone,
    faClosedCaptioning,
    faComment,
    faCommentAlt,
    faCommentDots,
    faComments,
    faCompass,
    faCopy,
    faHandPointRight,
    faCopyright
} from '@fortawesome/free-regular-svg-icons';

import {
    faAngleRight,
    faAngleDoubleRight,
    faAnchor,
    faChevronRight,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

type IconType = 'check-circle' | 'check-square' | 'right' | 'left';

interface IconProps {
    value: IconType;
    color?: string;
    size?: "xs" | "lg" | "sm" | '2x';
    spin?: boolean;
    border?: boolean;
    style?: CSSProperties;
}

const Icon: FC<IconProps> = ({ value, size = "lg", color = '#000', spin = false, border = false, style }) => {
    // const getIcon = (type) => {
    //     switch (type) {
    //         case "address":
    //             return faAddressBook;
    //     }
    // }
    return <FontAwesomeIcon icon={IconFactory(value)} size={size} color={color} spin={spin} border={border} style={style} />;
}



function IconFactory(type) {
    switch (type) {
        case 'check-circle':
            return faCheckCircle;
        case 'check-square':
            return faCheckSquare;
        case 'clock':
            return faClock;
        case 'copy':
            return faClone;
        case 'comment':
            return faComment;
        case 'comments':
            return faComments;
        case 'comment-alt':
            return faCommentAlt;
        case 'comment-dots':
            return faCommentDots;
        case 'compass':
            return faCompass;
        case 'right':
            return faChevronRight;
        case 'left':
            return faChevronLeft;
        case 'anchor':
            return faAnchor;
        default:
            return faChevronRight;
    }
}

export default Icon;