"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,358];
exports.modules = {

/***/ 7171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/BubbleChartTwoTone"
const BubbleChartTwoTone_namespaceObject = require("@mui/icons-material/BubbleChartTwoTone");
var BubbleChartTwoTone_default = /*#__PURE__*/__webpack_require__.n(BubbleChartTwoTone_namespaceObject);
// EXTERNAL MODULE: ./components/core-components/MuiNextLink.js
var MuiNextLink = __webpack_require__(9111);
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
;// CONCATENATED MODULE: ./components/core-components/Navbar.js




const Navbar = ({ navLinks  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
        component: "nav",
        sx: {
            display: {
                xs: `none`,
                md: `flex`
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
            direction: "row",
            spacing: 4,
            children: navLinks.map(({ title , path  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx(MuiNextLink/* default */.C, {
                    href: path,
                    variant: "button",
                    sx: {
                        fontSize: '20px',
                        opacity: 0.7,
                        color: 'primary.dark',
                        textDecoration: 'none',
                        textTransform: 'none'
                    },
                    children: title
                }, `${title}${i}`)
            )
        })
    }));
};
/* harmony default export */ const core_components_Navbar = (Navbar);

;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/core-components/SideDrawer.js









const SideDrawer = ({ navLinks  })=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        right: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
            });
        }
    ;
    const list = (anchor)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                width: 250,
                marginTop: `auto`,
                marginBottom: `auto`
            },
            role: "presentation",
            onClick: toggleDrawer(anchor, false),
            onKeyDown: toggleDrawer(anchor, false),
            children: /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                children: navLinks.map(({ title , path  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "button",
                        sx: {
                            ml: 5,
                            my: 2,
                            textTransform: 'none'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MuiNextLink/* default */.C, {
                            sx: {
                                fontSize: '20px',
                                textDecoration: 'none'
                            },
                            href: path,
                            children: title
                        })
                    }, `${title}${i}`)
                )
            })
        })
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                edge: "start",
                "aria-label": "menu",
                onClick: toggleDrawer("right", true),
                sx: {
                    color: `primary.main`,
                    display: {
                        xs: `inline`,
                        md: `none`
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                    fontSize: "large"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                anchor: "right",
                open: state.right,
                onClose: toggleDrawer("right", false),
                sx: {
                    ".MuiDrawer-paper": {
                        bgcolor: "secondary.main"
                    }
                },
                children: list("right")
            })
        ]
    }));
};
/* harmony default export */ const core_components_SideDrawer = (SideDrawer);

;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Slide"
const Slide_namespaceObject = require("@mui/material/Slide");
;// CONCATENATED MODULE: ./components/core-components/HideOnScroll.js



const HideOnScroll = ({ children  })=>{
    const trigger = useScrollTrigger();
    return(/*#__PURE__*/ _jsx(Slide, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children
    }));
};
/* harmony default export */ const core_components_HideOnScroll = ((/* unused pure expression or super */ null && (HideOnScroll)));

;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/KeyboardArrowUp"
const KeyboardArrowUp_namespaceObject = require("@mui/icons-material/KeyboardArrowUp");
var KeyboardArrowUp_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowUp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
;// CONCATENATED MODULE: ./components/core-components/BackToTop.js




const BackToTop = ({ children  })=>{
    const trigger = useScrollTrigger_default()();
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((Zoom_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 120,
                right: 16
            },
            children: children
        })
    }));
};
/* harmony default export */ const core_components_BackToTop = (BackToTop);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const material_Menu_namespaceObject = require("@mui/material/Menu");
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: ./pages/utils/_web3.js
var _web3 = __webpack_require__(6968);
;// CONCATENATED MODULE: external "@mui/material/Modal"
const Modal_namespaceObject = require("@mui/material/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/web3/connectModal.js






function ConnectModal(props) {
    const { isModalVisible , handleClose , handleLoginClick  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
            open: isModalVisible,
            onClose: handleClose,
            onBackdropClick: handleClose,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: style,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Coinbase, {
                            onClick: ()=>handleLoginClick('coinbase')
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/wallets/coinbase.png",
                                height: 55,
                                width: 320,
                                alt: "login with Coinbase Wallet!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(WalletConnect, {
                            onClick: ()=>handleLoginClick('walletconnect')
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/wallets/walletconnect.svg",
                                height: 100,
                                width: 300,
                                alt: "login with Wallet Connect!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Metamask, {
                            onClick: ()=>handleLoginClick('metamask')
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/wallets/metamask.svg",
                                height: 100,
                                width: 300,
                                alt: "login with Metamask!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CloseModal, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "close-inner",
                                onClick: ()=>handleClose()
                                ,
                                children: "Close"
                            })
                        })
                    ]
                })
            })
        })
    }));
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    bgcolor: 'white',
    border: '0px',
    boxShadow: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    p: 4
};
const Coinbase = (external_styled_components_default()).div`
  padding-top: 20px;
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  :hover {
    opacity:0.8;
  }
`;
const WalletConnect = (external_styled_components_default()).div`
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;

  :hover {
    opacity:0.8;
  }
`;
const Metamask = (external_styled_components_default()).div`
  cursor: pointer;

  :hover {
    opacity:0.8;
  }
`;
const CloseModal = (external_styled_components_default()).div`
  padding-top: 2rem;

  .close-inner {
    text-transform:uppercase;
    font-family: "Space Mono", sans-serif;
    display:table;
    cursor:pointer;
    margin:0 auto;
    transition:0.2s all cubic-bezier(0.165, 0.84, 0.44, 1);

    color: rgba(0,0,0,0.4);
  }

  .close-inner:hover {
    color: rgba(0,0,0,0.2);
  }
`;

;// CONCATENATED MODULE: external "@mui/icons-material/KeyboardArrowDown"
const KeyboardArrowDown_namespaceObject = require("@mui/icons-material/KeyboardArrowDown");
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/web3/connect.js












function Connect() {
    const { activate , deactivate , chainId , active , account , library  } = (0,core_.useWeb3React)();
    const router = (0,router_.useRouter)();
    // for the modal
    const { 0: isModalVisible , 1: setIsModalVisible  } = (0,external_react_.useState)(false);
    const walletConnectConnector = _web3.walletConnect;
    const handleClose = ()=>setIsModalVisible(false)
    ;
    const handleConnect = ()=>{
        setIsModalVisible(true);
        handleMenuClose();
    };
    // for the dropdown menu
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
    };
    const handleBodyScroll = ()=>{
        document.body.style.overflow = 'visible';
    };
    const handleLoginClick = async (type)=>{
        if (type === 'coinbase') {
            await activate(_web3.walletlink);
        } else if (type === 'metamask') {
            await activate(_web3.injected);
        } else {
            await activate(walletConnectConnector);
        }
        handleBodyScroll();
        handleClose();
    };
    const goToWallet = async ()=>{
        router.push('/wallet');
    };
    const handleDisconnect = async ()=>{
        await deactivate();
    };
    const ENSName = (0,_web3.useENSName)(library, account);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            textAlign: 'center'
        },
        children: [
            !active ? /*#__PURE__*/ jsx_runtime_.jsx(CustomButton, {
                variant: "contained",
                disableElevation: true,
                onClick: handleConnect,
                children: "Connect Wallet"
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Connected, {
                        variant: "contained",
                        onClick: handleMenuClick,
                        disableElevation: true,
                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDown_default()), {
                        }),
                        children: account && (ENSName || (0,_web3.abridgeAddress)(account))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomMenu, {
                        id: "basic-menu",
                        anchorEl: anchorEl,
                        open: open,
                        onClose: handleMenuClose,
                        MenuListProps: {
                            'aria-labelledby': 'basic-button'
                        },
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right'
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                variant: "contained",
                                onClick: goToWallet,
                                divider: true,
                                children: "Your wallet"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                variant: "contained",
                                onClick: handleDisconnect,
                                children: "Disconnect"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ConnectModal, {
                isModalVisible: isModalVisible,
                handleLoginClick: handleLoginClick,
                handleClose: handleClose
            }),
            active && chainId !== 4 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Please connect to Rinkeby for this demo. "
            })
        ]
    }));
};
const CustomButton = (0,styles_.styled)((Button_default()))(({ theme  })=>({
        borderRadius: '20px',
        height: '45px',
        fontSize: '1.2rem',
        fontFamily: [
            'Space Mono,monospace',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif', 
        ].join(',')
    })
);
const Connected = (0,styles_.styled)((Button_default()))(({ theme  })=>({
        borderRadius: '20px',
        height: '45px',
        fontSize: '1.1rem',
        padding: '1rem',
        textTransform: 'none',
        fontFamily: [
            'Space Mono,monospace',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif', 
        ].join(',')
    })
);
const CustomMenu = (0,styles_.styled)((material_Menu_default()))(({ theme  })=>({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(0.5),
            minWidth: 180,
            color: theme.palette.primary,
            background: theme.palette.primary.light,
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0'
            },
            '& .MuiMenuItem-root': {
                color: 'white',
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.primary.light,
                    marginRight: theme.spacing(1.5)
                },
                '&:active': {
                    backgroundColor: (0,styles_.alpha)(theme.palette.primary.light, theme.palette.action.selectedOpacity)
                }
            }
        }
    })
);

;// CONCATENATED MODULE: ./components/core-components/Header.js
















const Offset = (0,system_namespaceObject.styled)("div")(({ theme  })=>theme.mixins.toolbar
);
const navLinks = [
    {
        title: 'home',
        path: '/#home'
    }, 
];
const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                sx: {
                    backgroundColor: '#9fc5f1;'
                },
                elevation: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                        maxWidth: "lg",
                        sx: {
                            display: `flex`,
                            justifyContent: `space-between`,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                edge: "start",
                                "aria-label": "home",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MuiNextLink/* default */.C, {
                                    activeClassName: "active",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((BubbleChartTwoTone_default()), {
                                        sx: {
                                            color: (theme)=>theme.palette.primary
                                        },
                                        fontSize: "large"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "row",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_components_Navbar, {
                                        navLinks: navLinks
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_components_SideDrawer, {
                                        navLinks: navLinks
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Connect, {
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Offset, {
                id: "back-to-top-anchor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_components_BackToTop, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "large",
                    "aria-label": "back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowUp_default()), {
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const core_components_Header = (Header);

// EXTERNAL MODULE: ./styles/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(5749);
// EXTERNAL MODULE: ./styles/theme.js
var theme = __webpack_require__(9742);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: external "@mui/icons-material"
const icons_material_namespaceObject = require("@mui/icons-material");
;// CONCATENATED MODULE: ./components/core-components/Footer.js







const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        alignItems: "center",
        className: (Home_module_default()).footer,
        sx: {
            py: 5,
            px: 4
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
            direction: "row",
            alignItems: "center",
            spacing: 4,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MuiNextLink/* default */.C, {
                    sx: {
                        textDecoration: "none",
                        color: 'black'
                    },
                    href: "https://twitter.com/camerapersonnft",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_namespaceObject.Twitter, {
                        fontSize: "large"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    children: [
                        "\xa9 ",
                        new Date().getFullYear()
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const core_components_Footer = (Footer);

;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./pages/_app.js












// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function getLibrary(provider) {
    const library = new providers_namespaceObject.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "NFT with Merkle Whitelist Web3 Scaffold"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Web3ReactProvider, {
                    getLibrary: getLibrary,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_components_Header, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_components_Footer, {
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 5749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./styles/createEmotionCache.js

function createEmotionCache() {
    return cache_default()({
        key: 'css'
    });
};


/***/ }),

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// Create a theme instance.
let theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
});
theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 6590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 9795:
/***/ ((module) => {

module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 7738:
/***/ ((module) => {

module.exports = require("@web3-react/walletlink-connector");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,968,989], () => (__webpack_exec__(7171)));
module.exports = __webpack_exports__;

})();