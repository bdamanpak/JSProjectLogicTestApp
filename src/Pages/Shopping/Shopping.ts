import { Box, render } from "../../Components"

export const Shopping = () => {
    let quantity = [0, 0, 0];
    let sum = 0;
    return Box({
        element: "div",
        attr: {
            class: "d-flex"
        },
        children: [Box({
            element: "div",
            attr: {
                class: "flex justify-between pt-5"
            },
            children: [Box({
                element: "img",
                attr: {
                    src: "left.svg",
                    onClick: () => {
                        addEventListener("click", () => {
                            location.assign("/news")
                        })
                    }
                },
                children: ""
            })
                , Box({
                    element: "img",
                    attr: {
                        src: "Account.svg"
                    },
                    children: ""
                })]
        }), Box({
            element: "div",
            attr: {
                class: "flex justify-between items-center mt-10 bg-gray-200 p-5 rounded-2xl"
            },
            children: [Box({
                element: "div",
                attr: {
                    class: "bg-gray-300 rounded-2xl p-10"
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "Icons.svg"
                    }
                })
            }), Box({
                element: "div",
                attr: {
                    class: "flex flex-col",
                },
                children: [
                    Box({
                        element: "h3",
                        attr: {
                            class: "text-xl"
                        },
                        children: "Lorem 1"
                    }), Box({
                        element: "p",
                        attr: {
                            class: "text-xs text-gray-500"
                        },
                        children: "$25.00"
                    }), Box({
                        element: "h3",
                        attr: {
                            class: "text-lg"
                        },
                        children: "Size: US 5"
                    }), Box({
                        element: "div",
                        attr: {},
                        children: Box({
                            element: "img",
                            attr: {
                                src: "love.svg"
                            },
                            children: []
                        })
                    })]
            }), Box({
                element: "div",
                attr: {
                    class: "flex gap-3 items-center"
                },
                children: [
                    Box({
                        element: "button",
                        attr: {
                            class: "bg-gray-300 px-5 py-2 rounded-lg font-bold text-xl",
                            onClick: () => {
                                quantity[0] -= 1;
                                if (quantity[0] < 0)
                                    quantity[0] = 0;
                                sum -= 25;
                                if (sum < 0)
                                    sum = 0;
                                console.log(sum);
                                render("product-1-quantity", quantity[0].toString());
                                render("total", sum.toString());

                            },
                        },
                        children: "-"
                    }), Box({
                        element: "p",
                        attr: {
                            id: "product-1-quantity",
                            class: "text-lg font-bold"
                        },
                        children: quantity[0].toString(),
                    }), Box({
                        element: "button",
                        attr: {
                            class: "bg-gray-300 px-5 py-2 rounded-lg font-bold text-xl",
                            onClick: () => {
                                quantity[0] += 1;
                                sum += 25;
                                console.log(sum);
                                render("product-1-quantity", quantity[0].toString());
                                render("total", sum.toString());

                            },
                        },
                        children: "+"
                    })
                ]
            })]
        }), Box({
            element: "div",
            attr: {
                class: "flex justify-between items-center mt-10 bg-gray-200 p-5 rounded-2xl"
            },
            children: [Box({
                element: "div",
                attr: {
                    class: "bg-gray-300 rounded-2xl p-10"
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "Icons.svg"
                    }
                })
            }), Box({
                element: "div",
                attr: {
                    class: "flex flex-col",
                },
                children: [
                    Box({
                        element: "h3",
                        attr: {
                            class: "text-xl"
                        },
                        children: "Lorem 2"
                    }), Box({
                        element: "p",
                        attr: {
                            class: "text-xs text-gray-500"
                        },
                        children: "$100.00"
                    }), Box({
                        element: "h3",
                        attr: {
                            class: "text-lg"
                        },
                        children: "Size: US 7"
                    }), Box({
                        element: "div",
                        attr: {},
                        children: Box({
                            element: "img",
                            attr: {
                                src: "love.svg"
                            },
                            children: []
                        })
                    })]
            }), Box({
                element: "div",
                attr: {
                    class: "flex gap-3 items-center"
                },
                children: [
                    Box({
                        element: "button",
                        attr: {
                            class: "bg-gray-300 px-5 py-2 rounded-lg font-bold text-xl",
                            onClick: () => {
                                quantity[1] -= 1;
                                if (quantity[1] < 0)
                                    quantity[1] = 0;
                                sum -= 100;
                                if (sum < 0)
                                    sum = 0;
                                console.log(sum);
                                render("product-2-quantity", quantity[1].toString());
                                render("total", sum.toString());

                            },
                        },
                        children: "-"
                    }), Box({
                        element: "p",
                        attr: {
                            id: "product-2-quantity",
                            class: "text-lg font-bold"
                        },
                        children: quantity[1].toString()
                    }), Box({
                        element: "button",
                        attr: {
                            class: "bg-gray-300 px-5 py-2 rounded-lg font-bold text-xl",
                            onClick: () => {
                                quantity[1] += 1;
                                sum += 100;
                                console.log(sum);
                                render("product-2-quantity", quantity[1].toString());
                                render("total", sum.toString());

                            },
                        },
                        children: "+"
                    })
                ]
            })]
        }), Box({
            element: "div",
            attr: {
                class: "flex justify-between items-center mt-10 bg-gray-200 p-5 rounded-2xl"
            },
            children: [Box({
                element: "div",
                attr: {
                    class: "bg-gray-300 rounded-2xl p-10"
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "Icons.svg"
                    }
                })
            }), Box({
                element: "div",
                attr: {
                    class: "flex flex-col",
                },
                children: [
                    Box({
                        element: "h3",
                        attr: {
                            class: "text-xl"
                        },
                        children: "Lorem 3"
                    }), Box({
                        element: "p",
                        attr: {
                            class: "text-xs text-gray-500"
                        },
                        children: "$65.00"
                    }), Box({
                        element: "h3",
                        attr: {
                            class: "text-lg"
                        },
                        children: "Size: US 9"
                    }), Box({
                        element: "div",
                        attr: {},
                        children: Box({
                            element: "img",
                            attr: {
                                src: "love.svg"
                            },
                            children: []
                        })
                    })]
            }), Box({
                element: "div",
                attr: {
                    class: "flex gap-3 items-center"
                },
                children: [
                    Box({
                        element: "button",
                        attr: {
                            class: "bg-gray-300 px-5 py-2 rounded-lg font-bold text-xl",
                            onClick: () => {
                                quantity[2] -= 1;
                                if (quantity[2] < 0)
                                    quantity[2] = 0;
                                sum -= 65;
                                if (sum < 0)
                                    sum = 0;
                                console.log(sum);
                                render("product-3-quantity", quantity[2].toString());
                                render("total", sum.toString());

                            },
                        },
                        children: "-"
                    }), Box({
                        element: "p",
                        attr: {
                            id: "product-3-quantity",
                            class: "text-lg font-bold"
                        },
                        children: quantity[2].toString(),
                    }), Box({
                        element: "button",
                        attr: {
                            class: "bg-gray-300 px-5 py-2 rounded-lg font-bold text-xl",
                            onClick: () => {
                                quantity[2] += 1;
                                sum += 65;
                                console.log(sum);
                                render("product-3-quantity", quantity[2].toString());
                                render("total", sum.toString());

                            },
                        },
                        children: "+"
                    })
                ]
            })]
        }), Box({
            element: "div",
            attr: {
                class: "flex flex-col"
            },
            children: [Box({
                element: "div",
                attr: {
                    class: "flex bg-gray-500 items-center justify-between bg-gray-300 shadow-2xl mt-12 p-8 rounded-3xl"
                },
                children: [Box({
                    element: "h1",
                    attr: {
                        class: "text-2xl font-bold"
                    },
                    children: "TOTAL $"
                }), Box({
                    element: "p",
                    attr: {
                        class: "text-2xl",
                        id: "total"
                    },
                    children: sum.toString()
                })]
            })]
        }), Box({
            element: "div",
            attr: {
                class: "flex justify-between bg-gray-300 shadow-2xl mt-12 p-8 rounded-3xl"
            },
            children: [
                Box({
                    element: "img",
                    attr: {
                        src: "home.svg"
                    }
                }), Box({
                    element: "img",
                    attr: {
                        src: "catalog.svg"
                    }
                }), Box({
                    element: "img",
                    attr: {
                        src: "favorite.svg"
                    }
                }), Box({
                    element: "a",
                    attr: {
                        href: "/home"
                    },
                    children: Box({
                        element: "img",
                        attr: {
                            src: "shopping_cart.svg",
                            onClick: () => {
                                addEventListener("click", () => {
                                    location.assign("/home")
                                })
                            }
                        }
                    })
                })]
        })]
    })
}