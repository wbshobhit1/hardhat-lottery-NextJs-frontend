"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{44132:function(o,e,r){r.r(e),r.d(e,{default:function(){return $}});var l=r(97621);r(67294),r(83078);const c=l.C`
    :after {
        background-color: ${(0,l.g)("light",90)};
    }

    :hover {
        :after {
            background-color: ${(0,l.g)("light",70)};
        }
    }

    :active {
        :after {
            background-color: ${(0,l.g)("light",50)};
        }
    }
`,n=l.C`
    background-color: ${l.c.red};
    border-color: ${l.c.red};
    color: ${l.c.red};

    :focus {
        box-shadow: 0px 0px 0px 2px ${l.c.paleCerulean};
    }

    svg {
        fill: ${l.c.red};
    }

    ${c}
`,a=l.C`
    background-color: ${l.c.green};
    border-color: ${l.c.green};
    color: ${l.c.green};

    :focus {
        box-shadow: 0px 0px 0px 2px ${l.c.paleCerulean};
    }

    svg {
        fill: ${l.c.green};
    }

    ${c}
`,t=l.C`
    background-color: ${l.c.blue};
    border-color: ${l.c.blue};
    color: ${l.c.blue};

    :focus {
        box-shadow: 0px 0px 0px 2px ${l.c.paleCerulean};
    }

    svg {
        fill: ${l.c.blue};
    }

    ${c}
`,u=l.C`
    background-color: ${l.c.yellow};
    border-color: ${l.c.yellow};
    color: ${l.c.yellow};

    :focus {
        box-shadow: 0px 0px 0px 2px ${l.c.paleCerulean};
    }

    svg {
        fill: ${l.c.yellow};
    }

    ${c}
`;var d={ButtonColoredStyled:(0,l.s)(l.B)`
    :after {
        background-color: ${(0,l.g)("dark",0)};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
    }

    ${({color:o})=>o&&(o=>{switch(o){case"red":return n;case"green":return a;case"blue":return t;case"yellow":return u;default:return}})(o)}
`};const{ButtonColoredStyled:s}=d,$=({color:o,...e})=>(0,l.j)(s,{color:o,...e})}}]);