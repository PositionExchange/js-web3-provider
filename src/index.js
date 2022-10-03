// Copyright © 2017-2022 Posi Wallet.
//
// This file is part of Posi Wallet. The full copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

"use strict";

import PosiWeb3Provider from "./ethereum_provider";

window.posiwallet = {
    Provider: PosiWeb3Provider,
    postMessage: null,
};
