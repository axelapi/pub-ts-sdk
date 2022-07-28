declare global {
    interface Document {
    }
}
declare type in_browser = keyof globalThis.Document extends never ? false : true;
declare type if_in_browser<a, b> = in_browser extends true ? a : b;
/**
 * Stops unions of specific types collapsing into their parent type.
 * This helps with editor support.
 * @example
 * ```ts
 * type $123 = 1 | 2 | 3;
 * type bad  = $123 | number; //:: number
 * type good = $123 | (number & no_collapse) //:: 1 | 2 | 3 & (number & no_collapse)
 * ```
 */
declare type no_collapse$1 = {};
/**
 * Compiletime newtype property holder.
 * Exported because the typescript compiler needs to be able to refer to this
 * fake symbol inter-module.
 *
 * Search for errors like "cannot be named" to understand why this needs to
 * happen.
 */
declare const nt_s: unique symbol;
/** Unwrap a newtype to it's underlaying javascript type. */
declare type unwrap<T> = T extends {
    [nt_s]: {
        unwraps_to: infer inner;
    };
} ? inner : T;
declare type newtype<uniq_name extends string, of> = of & {
    [nt_s]: {
        types: {
            [key in uniq_name]: void;
        };
        unwraps_to: unwrap<of>;
    };
};
declare type any_fn = (...args: any[]) => any;
declare type uint$1 = newtype<"uint", number>;
declare type ufloat$1 = newtype<"ufloat", number>;

/** all present progressive */
declare const action_classes: readonly ["lending", "staking", "yielding", "exchanging"];
declare type action_class$k = typeof action_classes[number];
declare const actions_info: {
    readonly lend: {
        readonly reverse: "unlend";
        readonly action_class: "lending";
    };
    readonly supply: {
        readonly reverse: "unsupply";
        readonly action_class: "lending";
    };
    readonly borrow: {
        readonly reverse: "unborrow";
        readonly action_class: "lending";
    };
    readonly stake: {
        readonly reverse: "unstake";
        readonly action_class: "staking";
    };
    readonly deposit: {
        readonly reverse: "undeposit";
        readonly action_class: "yielding";
    };
    readonly exchange: {
        readonly reverse: "exchange";
        readonly action_class: "exchanging";
    };
    readonly unlend: {
        readonly reverse: "lend";
        readonly action_class: "lending";
    };
    readonly unsupply: {
        readonly reverse: "supply";
        readonly action_class: "lending";
    };
    readonly unborrow: {
        readonly reverse: "borrow";
        readonly action_class: "lending";
    };
    readonly unstake: {
        readonly reverse: "stake";
        readonly action_class: "staking";
    };
    readonly undeposit: {
        readonly reverse: "deposit";
        readonly action_class: "yielding";
    };
};
declare type actions_info = typeof actions_info;
declare const actions: readonly ("unlend" | "unsupply" | "unborrow" | "unstake" | "undeposit" | "exchange" | "lend" | "supply" | "borrow" | "stake" | "deposit")[];
declare type action = keyof actions_info;

type actions_d_action = action;
type actions_d_actions_info = actions_info;
declare const actions_d_actions: typeof actions;
declare namespace actions_d {
  export {
    actions_d_action as action,
    action_class$k as action_class,
    actions_d_actions_info as actions_info,
    actions_d_actions as actions,
    actions_info as info,
    action_classes as classes,
  };
}

declare type uint = number;
declare type ufloat = number;

declare type hex_string$1 = newtype<"hex_string", `0x${string}`>;

declare type address$1 = newtype<"address", hex_string$1>;

declare type address = `0x${string}`;

type address_d_address = address;
declare namespace address_d {
  export {
    address_d_address as address,
  };
}

declare const key_types: {
    readonly b: "bot";
    readonly t: "test";
    readonly u: "user";
};
declare const version: "0";
declare type version = typeof version;
declare type oldtype = `axl${keyof typeof key_types}-${version}-${string}`;
declare type api_key$1 = newtype<"api_key", oldtype>;

declare type api_key = `axlb-0-${string}` | `axlu-0-${string}` | `axlt-0-${string}`;

type api_key_d_api_key = api_key;
declare namespace api_key_d {
  export {
    api_key_d_api_key as api_key,
  };
}

/** apy type to action class */
declare const apy_info: {
    readonly lend: "lending";
    readonly borrow: "lending";
    readonly stake: "staking";
    readonly yield: "yielding";
};
declare type apy_info = typeof apy_info;
declare type apy_type = keyof apy_info;

type apy_d_apy_type = apy_type;
type apy_d_apy_info = apy_info;
declare namespace apy_d {
  export {
    apy_d_apy_type as apy_type,
    apy_d_apy_info as apy_info,
    apy_info as info,
  };
}

// type support


// For certain operations, such as connecting to a wallet using window.ethereum
// it's nice to be able to adjust the type of a function based on whether
// typescript thinks we're in a browser environment. If a parameter isn't
// optional in a non-browser environment, then the type should be updated to
// match this.
declare global { interface Document {} }

/**
 * Stops unions of specific types collapsing into their parent type.
 * This helps with editor support.
 * @example
 * ```ts
 * type $123 = 1 | 2 | 3;
 * type bad  = $123 | number; //:: number
 * type good = $123 | (number & no_collapse) //:: 1 | 2 | 3 & (number & no_collapse)
 * ```
 */
type no_collapse = {};

declare type hex_string = `0x${string}`;

type hex_string_d_hex_string = hex_string;
declare namespace hex_string_d {
  export {
    hex_string_d_hex_string as hex_string,
  };
}

declare const mainnets: readonly ["ethereum"];
declare type mainnet = typeof mainnets[number];
declare const testnets: readonly ["kovan", "rinkeby", "ropsten", "goerli"];
declare type testnet = typeof testnets[number];
declare const internets: readonly ["ethereum", "kovan", "rinkeby", "ropsten", "goerli"];
declare type internet = mainnet | testnet;
declare type externet$1 = newtype<"externet", string & no_collapse$1>;
declare type chain$1 = internet | externet$1;

declare type externet = string & no_collapse;
declare type chain = "ethereum" | "kovan" | "rinkeby" | "ropsten" | "goerli" | (string & no_collapse);
declare type chain_id = `0x${string}`;
declare type new_externet = {
    name: string;
    chain_id: hex_string;
    forks: internet;
};

declare const externets: readonly externet[];
declare const add_externet: {
    (new_externet: new_externet): void;
};

type chains_d_externet = externet;
type chains_d_chain = chain;
type chains_d_chain_id = chain_id;
type chains_d_new_externet = new_externet;
declare const chains_d_externets: typeof externets;
declare const chains_d_add_externet: typeof add_externet;
type chains_d_mainnet = mainnet;
type chains_d_testnet = testnet;
type chains_d_internet = internet;
declare const chains_d_mainnets: typeof mainnets;
declare const chains_d_testnets: typeof testnets;
declare const chains_d_internets: typeof internets;
declare namespace chains_d {
  export {
    chains_d_externet as externet,
    chains_d_chain as chain,
    chains_d_chain_id as chain_id,
    chains_d_new_externet as new_externet,
    chains_d_externets as externets,
    chains_d_add_externet as add_externet,
    chains_d_mainnet as mainnet,
    chains_d_testnet as testnet,
    chains_d_internet as internet,
    chains_d_mainnets as mainnets,
    chains_d_testnets as testnets,
    chains_d_internets as internets,
  };
}

declare type error_entry = string | AxelError;
declare class AxelError extends Error {
    #private;
    constructor(entries: error_entry[]);
}
declare class AxelTypeError extends AxelError {
    constructor(lines: error_entry[]);
}

type err_d_AxelError = AxelError;
declare const err_d_AxelError: typeof AxelError;
type err_d_AxelTypeError = AxelTypeError;
declare const err_d_AxelTypeError: typeof AxelTypeError;
declare namespace err_d {
  export {
    err_d_AxelError as AxelError,
    err_d_AxelTypeError as AxelTypeError,
  };
}

interface RequestArguments {
    readonly method: string;
    readonly params?: readonly unknown[] | object;
}
/**
 * Metamask does not conform to the spec.
 * Data should not be optional...
 */
interface ProviderRpcError extends Error {
    code: number;
    data?: unknown;
}
declare type ProviderEventName = "connect" | "disconnect" | "chainChanged" | "accountsChanged";
interface EIP_1193_Provider$1 {
    isMetaMask?: boolean;
    isCoinbaseWallet?: boolean;
    on(event_name: ProviderEventName, fn: any_fn): void;
    removeListener(event_name: ProviderEventName, fn: any_fn): boolean;
    request(args: RequestArguments): Promise<unknown>;
}

declare type good_provider = {
    provider: EIP_1193_Provider$1;
};
declare type bad_provider = {
    provider: null;
};
declare function get_accounts$1(this: AxelCoreClient & bad_provider): Promise<[]>;
declare function get_accounts$1(this: AxelCoreClient): Promise<address$1[]>;

declare function get_account$1(this: AxelCoreClient & bad_provider): Promise<null>;
declare function get_account$1(this: AxelCoreClient): Promise<address$1>;

/**
 * @throws if the result of eth_chainId was not a hex_string
 * @returns null if this.provider is null
 * @returns hex_string if all good
 */
declare function get_chain_id$1(this: AxelCoreClient & bad_provider): Promise<null>;
declare function get_chain_id$1(this: AxelCoreClient & good_provider): Promise<hex_string$1>;
declare function get_chain_id$1(this: AxelCoreClient): Promise<hex_string$1 | null>;

/**
 * @throws if the hex_string was not a known chain_id
 * @returns null if this.provider is null
 * @returns chain if all good
 */
declare function get_chain$1(this: AxelCoreClient & bad_provider): Promise<null>;
declare function get_chain$1(this: AxelCoreClient & good_provider): Promise<chain$1>;
declare function get_chain$1(this: AxelCoreClient): Promise<chain$1 | null>;

declare function estimate_gas$1(this: AxelCoreClient, chain: chain$1): Promise<hex_string$1>;
declare function safe_estimate_gas$1(this: AxelCoreClient, __chain?: unknown): Promise<hex_string$1>;

declare const tokens_info: {
    readonly ETH: {
        readonly type: "native";
    };
    readonly DAI: {
        readonly type: "erc20";
        readonly redemption: false;
    };
    readonly USDC: {
        readonly type: "erc20";
        readonly redemption: false;
    };
    readonly aWETH: {
        readonly type: "erc20";
        readonly redemption: true;
    };
    readonly cETH: {
        readonly type: "erc20";
        readonly redemption: true;
    };
    readonly rETH: {
        readonly type: "erc20";
        readonly redemption: true;
    };
    readonly stETH: {
        readonly type: "erc20";
        readonly redemption: true;
    };
    readonly yvWETH: {
        readonly type: "erc20";
        readonly redemption: true;
    };
    readonly aUSDC: {
        readonly type: "erc20";
        readonly redemption: true;
    };
    readonly cUSDC: {
        readonly type: "erc20";
        readonly redemption: true;
    };
};
declare type tokens_info = typeof tokens_info;
declare const tokens: readonly ("ETH" | "DAI" | "USDC" | "aWETH" | "cETH" | "rETH" | "stETH" | "yvWETH" | "aUSDC" | "cUSDC")[];
declare type token = keyof typeof tokens_info;
declare const native_tokens: readonly "ETH"[];
declare type native_token = "ETH";
declare const redemption_tokens: readonly ("aWETH" | "cETH" | "rETH" | "stETH" | "yvWETH" | "aUSDC" | "cUSDC")[];
declare type redemption_token = "aWETH" | "cETH" | "rETH" | "stETH" | "yvWETH" | "aUSDC" | "cUSDC";
declare const erc20_tokens: readonly ("DAI" | "USDC" | "aWETH" | "cETH" | "rETH" | "stETH" | "yvWETH" | "aUSDC" | "cUSDC")[];
declare type erc20_token = "DAI" | "USDC" | "aWETH" | "cETH" | "rETH" | "stETH" | "yvWETH" | "aUSDC" | "cUSDC";
declare const internet_to_native_token: {
    [chain in internet]: native_token;
};

declare const protocols_info: {
    readonly auto: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly aave: {
        readonly action_class: readonly ["lending"];
        readonly supported_chains: readonly ["ethereum", "kovan"];
    };
    readonly balancer: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly compound: {
        readonly action_class: readonly ["lending"];
        readonly supported_chains: readonly ["ethereum", "rinkeby"];
    };
    readonly curve: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly lido: {
        readonly action_class: readonly ["staking"];
        readonly supported_chains: readonly ["ethereum", "goerli"];
    };
    readonly maker: {
        readonly action_class: readonly ["lending"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly oneinch: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly quickswap: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly rari: {
        readonly action_class: readonly ["lending"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly rocketpool: {
        readonly action_class: readonly ["staking"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly sushiswap: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly uniswap: {
        readonly action_class: readonly ["exchanging"];
        readonly supported_chains: readonly ["ethereum"];
    };
    readonly yearn: {
        readonly action_class: readonly ["yielding"];
        readonly supported_chains: readonly ["ethereum"];
    };
};
declare type pcols_info_t = typeof protocols_info;
declare type protocols_of<cls extends action_class$k> = {
    [key in keyof pcols_info_t]: cls extends pcols_info_t[key]["action_class"][number] ? key : never;
}[keyof pcols_info_t];
declare type protocol = keyof pcols_info_t;
declare type lending_protocol = protocols_of<"lending">;
declare type staking_protocol = protocols_of<"staking">;
declare type yielding_protocol = protocols_of<"yielding">;
declare type exchanging_protocol = protocols_of<"exchanging">;
declare type filter_pcols_by = {
    chain?: internet;
    action_class?: action_class$k;
};

/** floating point between [0, 2] */
declare type gas_priority$1 = newtype<"gas_priority", ufloat$1>;

declare type full_exchange_request$1 = {
    sell_amount: ufloat$1;
    sell_token: token;
    buy_token: token;
    protocol: exchanging_protocol;
    client_chain: chain$1;
    chain: internet;
    wallet_address: address$1;
    gas_priority: gas_priority$1;
    minutes_timeout: uint$1;
};
declare function exchange$1(this: AxelCoreClient, opts: full_exchange_request$1): Promise<hex_string$1>;
declare function safe_exchange$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare type full_apy_req$1 = {
    protocol: protocols_of<apy_info[apy_type]>;
    chain: internet;
    token: token;
};
declare type partial_apy_req$1 = {
    protocol: protocols_of<apy_info[apy_type]>;
    chain?: internet;
    token?: token;
};
declare function get_apy$1(this: AxelCoreClient, type: apy_type, opts: full_apy_req$1): Promise<ufloat$1>;
declare function safe_get_apy$1(this: AxelCoreClient, type: apy_type, opts: partial_apy_req$1): Promise<ufloat$1>;

declare type full_balance_request$1 = {
    client_chain: chain$1;
    chain: internet;
    token: token;
    wallet_address: address$1;
};
declare function get_balance$1(this: AxelCoreClient, opts: full_balance_request$1): Promise<ufloat$1>;
declare function safe_get_balance$1(this: AxelCoreClient, opts?: unknown): Promise<ufloat$1>;

declare type two1_req_full$1<pcols extends protocol = protocol> = {
    amount: ufloat$1;
    protocol: pcols;
    client_chain: chain$1;
    chain: internet;
    token: token;
    wallet_address: address$1;
    gas_priority: gas_priority$1;
    minutes_timeout: uint$1;
};

declare const action_class$j: "lending";
declare type action_class$j = typeof action_class$j;
declare type pcols$9 = protocols_of<typeof action_class$j>;
declare function borrow$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$9>): Promise<hex_string$1>;
declare function safe_borrow$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$i: "yielding";
declare type action_class$i = typeof action_class$i;
declare type pcols$8 = protocols_of<typeof action_class$i>;
declare function deposit$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$8>): Promise<hex_string$1>;
declare function safe_deposit$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$h: "lending";
declare type action_class$h = typeof action_class$h;
declare type pcols$7 = protocols_of<typeof action_class$h>;
declare function lend$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$7>): Promise<hex_string$1>;
declare function safe_lend$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$g: "staking";
declare type action_class$g = typeof action_class$g;
declare type pcols$6 = protocols_of<typeof action_class$g>;
declare function stake$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$6>): Promise<hex_string$1>;
declare function safe_stake$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$f: "lending";
declare type action_class$f = typeof action_class$f;
declare type pcols$5 = protocols_of<typeof action_class$f>;
declare function supply$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$5>): Promise<hex_string$1>;
declare function safe_supply$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$e: "lending";
declare type action_class$e = typeof action_class$e;
declare type pcols$4 = protocols_of<typeof action_class$e>;
declare function unborrow$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$4>): Promise<hex_string$1>;
declare function safe_unborrow$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$d: "yielding";
declare type action_class$d = typeof action_class$d;
declare type pcols$3 = protocols_of<typeof action_class$d>;
declare function undeposit$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$3>): Promise<hex_string$1>;
declare function safe_undeposit$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$c: "lending";
declare type action_class$c = typeof action_class$c;
declare type pcols$2 = protocols_of<typeof action_class$c>;
declare function unlend$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$2>): Promise<hex_string$1>;
declare function safe_unlend$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$b: "staking";
declare type action_class$b = typeof action_class$b;
declare type pcols$1 = protocols_of<typeof action_class$b>;
declare function unstake$1(this: AxelCoreClient, opts: two1_req_full$1<pcols$1>): Promise<hex_string$1>;
declare function safe_unstake$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

declare const action_class$a: "lending";
declare type action_class$a = typeof action_class$a;
declare type pcols = protocols_of<typeof action_class$a>;
declare function unsupply$1(this: AxelCoreClient, opts: two1_req_full$1<pcols>): Promise<hex_string$1>;
declare function safe_unsupply$1(this: AxelCoreClient, opts: unknown): Promise<hex_string$1>;

interface AxelCoreClient {
    api_key: api_key$1;
    provider: EIP_1193_Provider$1 | null;
    on: on$1;
    off: off$1;
    connect: connect$1;
    readonly get_accounts: typeof get_accounts$1;
    readonly get_account: typeof get_account$1;
    readonly get_chain_id: typeof get_chain_id$1;
    readonly get_chain: typeof get_chain$1;
    readonly unsafe_estimate_gas: typeof estimate_gas$1;
    readonly estimate_gas: typeof safe_estimate_gas$1;
    readonly unsafe_exchange: typeof exchange$1;
    readonly exchange: typeof safe_exchange$1;
    readonly unsafe_get_apy: typeof get_apy$1;
    readonly get_apy: typeof safe_get_apy$1;
    readonly unsafe_get_balance: typeof get_balance$1;
    readonly get_balance: typeof safe_get_balance$1;
    readonly unsafe_borrow: typeof borrow$1;
    readonly borrow: typeof safe_borrow$1;
    readonly unsafe_deposit: typeof deposit$1;
    readonly deposit: typeof safe_deposit$1;
    readonly unsafe_lend: typeof lend$1;
    readonly lend: typeof safe_lend$1;
    readonly unsafe_stake: typeof stake$1;
    readonly stake: typeof safe_stake$1;
    readonly unsafe_supply: typeof supply$1;
    readonly supply: typeof safe_supply$1;
    readonly unsafe_unborrow: typeof unborrow$1;
    readonly unborrow: typeof safe_unborrow$1;
    readonly unsafe_undeposit: typeof undeposit$1;
    readonly undeposit: typeof safe_undeposit$1;
    readonly unsafe_unlend: typeof unlend$1;
    readonly unlend: typeof safe_unlend$1;
    readonly unsafe_unstake: typeof unstake$1;
    readonly unstake: typeof safe_unstake$1;
    readonly unsafe_unsupply: typeof unsupply$1;
    readonly unsupply: typeof safe_unsupply$1;
}
declare function AxelCoreClient(this: AxelCoreClient, api_key: unknown): void;

declare const event_names: readonly ["provider_connect", "provider_disconnect", "accounts_update", "chain_update"];
declare type event_name = typeof event_names[number];
declare type on$1 = {
    (this: AxelCoreClient, name: unknown, listener: unknown): void;
};
declare type off$1 = {
    (this: AxelCoreClient, name: unknown, listener: unknown): boolean;
};
declare type connect$1 = {
    (this: AxelCoreClient, ethereum: unknown): Promise<void>;
};

interface EIP_1193_Provider {
    isMetaMask?: boolean;
    isCoinbaseWallet?: boolean;
    on(event_name: ProviderEventName, fn: any_fn): void;
    removeListener(event_name: ProviderEventName, fn: any_fn): boolean;
    request(args: RequestArguments): Promise<unknown>;
}

type EIP_1193_d_EIP_1193_Provider = EIP_1193_Provider;
type EIP_1193_d_RequestArguments = RequestArguments;
type EIP_1193_d_ProviderRpcError = ProviderRpcError;
type EIP_1193_d_ProviderEventName = ProviderEventName;
declare namespace EIP_1193_d {
  export {
    EIP_1193_d_EIP_1193_Provider as EIP_1193_Provider,
    EIP_1193_d_RequestArguments as RequestArguments,
    EIP_1193_d_ProviderRpcError as ProviderRpcError,
    EIP_1193_d_ProviderEventName as ProviderEventName,
  };
}

declare type browser_connect = {
    (this: AxelClientInstance, ethereum?: EIP_1193_Provider): Promise<void>;
};
declare type server_connect = {
    (this: AxelClientInstance, ethereum: EIP_1193_Provider): Promise<void>;
};
declare type connect = if_in_browser<browser_connect, server_connect>;

declare type get_accounts = {
    (this: AxelClientInstance): Promise<address[]>;
};
declare type get_account = {
    (this: AxelClientInstance): Promise<address | null>;
};
/**
 * @throws if the result of eth_chainId was not a hex_string
 * @returns null if this.provider is null
 * @returns hex_string if all good
 */
declare type get_chain_id = {
    (this: AxelClientInstance): Promise<hex_string | null>;
};
/**
 * @throws if the hex_string was not a known chain_id
 * @returns null if this.provider is null
 * @returns chain if all good
 */
declare type get_chain = {
    (this: AxelClientInstance): Promise<chain | null>;
};

declare type estimate_gas = {
    (this: AxelClientInstance, chain: chain): Promise<hex_string>;
};
declare type safe_estimate_gas = {
    (this: AxelClientInstance, chain?: chain): Promise<hex_string>;
};

type tokens_d_native_token = native_token;
type tokens_d_redemption_token = redemption_token;
type tokens_d_erc20_token = erc20_token;
declare namespace tokens_d {
  export {
    token as any_token,
    tokens_d_native_token as native_token,
    tokens_d_redemption_token as redemption_token,
    tokens_d_erc20_token as erc20_token,
    tokens as all,
    erc20_tokens as erc20,
    native_tokens as native,
    redemption_tokens as redemption,
    internet_to_native_token as from_internet,
  };
}

declare type gas_priority = number;
declare type get_default_gas_priority = {
    (this: AxelClientInstance): gas_priority;
};
declare type set_default_gas_priority = {
    (this: AxelClientInstance, gas_priority: gas_priority): void;
};
declare const low: gas_priority;
declare const medium: gas_priority;
declare const high: gas_priority;

type gas_priority_d_gas_priority = gas_priority;
type gas_priority_d_get_default_gas_priority = get_default_gas_priority;
type gas_priority_d_set_default_gas_priority = set_default_gas_priority;
declare const gas_priority_d_low: typeof low;
declare const gas_priority_d_medium: typeof medium;
declare const gas_priority_d_high: typeof high;
declare namespace gas_priority_d {
  export {
    gas_priority_d_gas_priority as gas_priority,
    gas_priority_d_get_default_gas_priority as get_default_gas_priority,
    gas_priority_d_set_default_gas_priority as set_default_gas_priority,
    gas_priority_d_low as low,
    gas_priority_d_medium as medium,
    gas_priority_d_high as high,
  };
}

declare type protocol_info = {
    readonly action_class: readonly action_class$k[];
    readonly supported_chains: readonly chain[];
};

declare const supports_chain: {
    (protocol: protocol, chain: internet): boolean;
};
declare const filter_by: {
    (filter?: filter_pcols_by): protocol[];
};

type protocols_d_protocol_info = protocol_info;
declare const protocols_d_supports_chain: typeof supports_chain;
declare const protocols_d_filter_by: typeof filter_by;
type protocols_d_protocol = protocol;
type protocols_d_protocols_of<cls extends action_class$k> = protocols_of<cls>;
type protocols_d_lending_protocol = lending_protocol;
type protocols_d_staking_protocol = staking_protocol;
type protocols_d_yielding_protocol = yielding_protocol;
type protocols_d_exchanging_protocol = exchanging_protocol;
declare namespace protocols_d {
  export {
    protocols_d_protocol_info as protocol_info,
    protocols_d_supports_chain as supports_chain,
    protocols_d_filter_by as filter_by,
    protocols_d_protocol as protocol,
    filter_pcols_by as protocol_filter,
    protocols_d_protocols_of as protocols_of,
    protocols_d_lending_protocol as lending_protocol,
    protocols_d_staking_protocol as staking_protocol,
    protocols_d_yielding_protocol as yielding_protocol,
    protocols_d_exchanging_protocol as exchanging_protocol,
    protocols_info as info,
  };
}

declare type full_exchange_request = {
    sell_amount: ufloat;
    sell_token: token;
    buy_token: token;
    protocol: exchanging_protocol;
    client_chain: chain;
    chain: internet;
    wallet_address: address;
    gas_priority: gas_priority;
    minutes_timeout: uint;
};
declare type partial_exchange_request = {
    sell_amount: ufloat;
    sell_token: token;
    buy_token: token;
    protocol: exchanging_protocol;
    chain?: chain;
    wallet_address?: address;
    gas_priority?: gas_priority;
    minutes_timeout?: uint;
};
declare type exchange = {
    (this: AxelClientInstance, opts: full_exchange_request): Promise<hex_string>;
};
declare type safe_exchange = {
    (this: AxelClientInstance, opts: partial_exchange_request): Promise<hex_string>;
};

declare type full_apy_req<type extends apy_type = apy_type> = {
    protocol: protocols_of<apy_info[type]>;
    chain: internet;
    token: token;
};
declare type partial_apy_req<type extends apy_type = apy_type> = {
    protocol: protocols_of<apy_info[type]>;
    chain?: internet;
    token?: token;
};
declare type get_apy = {
    <type extends apy_type>(this: AxelClientInstance, type: apy_type, opts: full_apy_req<type>): Promise<ufloat>;
};
declare type safe_get_apy = {
    <type extends apy_type>(this: AxelClientInstance, type: type, opts: partial_apy_req<type>): Promise<ufloat>;
};

declare type full_balance_request = {
    client_chain: chain;
    chain: internet;
    token: token;
    wallet_address: address;
};
declare type partial_balance_request = {
    chain?: chain;
    token?: token;
    wallet_address?: address;
};
declare type get_balance = {
    (this: AxelClientInstance, opts: full_balance_request): Promise<ufloat>;
};
declare type safe_get_balance = {
    (this: AxelClientInstance, opts?: partial_balance_request): Promise<ufloat>;
};

declare type two1_req_partial<pcols extends protocol = protocol> = {
    amount: ufloat;
    protocol: pcols;
    chain?: chain;
    token?: token;
    wallet_address?: address;
    gas_priority?: gas_priority;
    minutes_timeout?: uint;
};
declare type two1_req_full<pcols extends protocol = protocol> = {
    amount: ufloat;
    protocol: pcols;
    client_chain: chain;
    chain: internet;
    token: token;
    wallet_address: address;
    gas_priority: gas_priority;
    minutes_timeout: uint;
};

declare type endpoint$9 = "borrow";
declare type action_class$9 = actions_info[endpoint$9]["action_class"];
declare type allowed_protocols$9 = protocols_of<action_class$9>;
declare type full_borrow_request = two1_req_full<allowed_protocols$9>;
declare type partial_borrow_request = two1_req_partial<allowed_protocols$9>;
declare type borrow = {
    (this: AxelClientInstance, opts: full_borrow_request): Promise<hex_string>;
};
declare type safe_borrow = {
    (this: AxelClientInstance, opts: partial_borrow_request): Promise<hex_string>;
};

declare type endpoint$8 = "deposit";
declare type action_class$8 = actions_info[endpoint$8]["action_class"];
declare type allowed_protocols$8 = protocols_of<action_class$8>;
declare type full_deposit_request = two1_req_full<allowed_protocols$8>;
declare type partial_deposit_request = two1_req_partial<allowed_protocols$8>;
declare type deposit = {
    (this: AxelClientInstance, opts: full_deposit_request): Promise<hex_string>;
};
declare type safe_deposit = {
    (this: AxelClientInstance, opts: partial_deposit_request): Promise<hex_string>;
};

declare type endpoint$7 = "lend";
declare type action_class$7 = actions_info[endpoint$7]["action_class"];
declare type allowed_protocols$7 = protocols_of<action_class$7>;
declare type full_lend_request = two1_req_full<allowed_protocols$7>;
declare type partial_lend_request = two1_req_partial<allowed_protocols$7>;
declare type lend = {
    (this: AxelClientInstance, opts: full_lend_request): Promise<hex_string>;
};
declare type safe_lend = {
    (this: AxelClientInstance, opts: partial_lend_request): Promise<hex_string>;
};

declare type endpoint$6 = "stake";
declare type action_class$6 = actions_info[endpoint$6]["action_class"];
declare type allowed_protocols$6 = protocols_of<action_class$6>;
declare type full_stake_request = two1_req_full<allowed_protocols$6>;
declare type partial_stake_request = two1_req_partial<allowed_protocols$6>;
declare type stake = {
    (this: AxelClientInstance, opts: full_stake_request): Promise<hex_string>;
};
declare type safe_stake = {
    (this: AxelClientInstance, opts: partial_stake_request): Promise<hex_string>;
};

declare type endpoint$5 = "supply";
declare type action_class$5 = actions_info[endpoint$5]["action_class"];
declare type allowed_protocols$5 = protocols_of<action_class$5>;
declare type full_supply_request = two1_req_full<allowed_protocols$5>;
declare type partial_supply_request = two1_req_partial<allowed_protocols$5>;
declare type supply = {
    (this: AxelClientInstance, opts: full_supply_request): Promise<hex_string>;
};
declare type safe_supply = {
    (this: AxelClientInstance, opts: partial_supply_request): Promise<hex_string>;
};

declare type endpoint$4 = "unborrow";
declare type action_class$4 = actions_info[endpoint$4]["action_class"];
declare type allowed_protocols$4 = protocols_of<action_class$4>;
declare type full_unborrow_request = two1_req_full<allowed_protocols$4>;
declare type partial_unborrow_request = two1_req_partial<allowed_protocols$4>;
declare type unborrow = {
    (this: AxelClientInstance, opts: full_unborrow_request): Promise<hex_string>;
};
declare type safe_unborrow = {
    (this: AxelClientInstance, opts: partial_unborrow_request): Promise<hex_string>;
};

declare type endpoint$3 = "undeposit";
declare type action_class$3 = actions_info[endpoint$3]["action_class"];
declare type allowed_protocols$3 = protocols_of<action_class$3>;
declare type full_undeposit_request = two1_req_full<allowed_protocols$3>;
declare type partial_undeposit_request = two1_req_partial<allowed_protocols$3>;
declare type undeposit = {
    (this: AxelClientInstance, opts: full_undeposit_request): Promise<hex_string>;
};
declare type safe_undeposit = {
    (this: AxelClientInstance, opts: partial_undeposit_request): Promise<hex_string>;
};

declare type endpoint$2 = "unlend";
declare type action_class$2 = actions_info[endpoint$2]["action_class"];
declare type allowed_protocols$2 = protocols_of<action_class$2>;
declare type full_unlend_request = two1_req_full<allowed_protocols$2>;
declare type partial_unlend_request = two1_req_partial<allowed_protocols$2>;
declare type unlend = {
    (this: AxelClientInstance, opts: full_unlend_request): Promise<hex_string>;
};
declare type safe_unlend = {
    (this: AxelClientInstance, opts: partial_unlend_request): Promise<hex_string>;
};

declare type endpoint$1 = "unstake";
declare type action_class$1 = actions_info[endpoint$1]["action_class"];
declare type allowed_protocols$1 = protocols_of<action_class$1>;
declare type full_unstake_request = two1_req_full<allowed_protocols$1>;
declare type partial_unstake_request = two1_req_partial<allowed_protocols$1>;
declare type unstake = {
    (this: AxelClientInstance, opts: full_unstake_request): Promise<hex_string>;
};
declare type safe_unstake = {
    (this: AxelClientInstance, opts: partial_unstake_request): Promise<hex_string>;
};

declare type endpoint = "unsupply";
declare type action_class = actions_info[endpoint]["action_class"];
declare type allowed_protocols = protocols_of<action_class>;
declare type full_unsupply_request = two1_req_full<allowed_protocols>;
declare type partial_unsupply_request = two1_req_partial<allowed_protocols>;
declare type unsupply = {
    (this: AxelClientInstance, opts: full_unsupply_request): Promise<hex_string>;
};
declare type safe_unsupply = {
    (this: AxelClientInstance, opts: partial_unsupply_request): Promise<hex_string>;
};

declare type ClientStatic = {
    new (api_key: api_key): AxelClientInstance;
};
interface AxelClientInstance {
    readonly api_key: api_key;
    readonly provider: EIP_1193_Provider | null;
    readonly on: on;
    readonly off: off;
    readonly connect: connect;
    readonly get_accounts: get_accounts;
    readonly get_account: get_account;
    readonly get_chain_id: get_chain_id;
    readonly get_chain: get_chain;
    readonly unsafe_estimate_gas: estimate_gas;
    readonly estimate_gas: safe_estimate_gas;
    readonly unsafe_exchange: exchange;
    readonly exchange: safe_exchange;
    readonly unsafe_get_apy: get_apy;
    readonly get_apy: safe_get_apy;
    readonly unsafe_get_balance: get_balance;
    readonly get_balance: safe_get_balance;
    readonly unsafe_borrow: borrow;
    readonly borrow: safe_borrow;
    readonly unsafe_deposit: deposit;
    readonly deposit: safe_deposit;
    readonly unsafe_lend: lend;
    readonly lend: safe_lend;
    readonly unsafe_stake: stake;
    readonly stake: safe_stake;
    readonly unsafe_supply: supply;
    readonly supply: safe_supply;
    readonly unsafe_unborrow: unborrow;
    readonly unborrow: safe_unborrow;
    readonly unsafe_undeposit: undeposit;
    readonly undeposit: safe_undeposit;
    readonly unsafe_unlend: unlend;
    readonly unlend: safe_unlend;
    readonly unsafe_unstake: unstake;
    readonly unstake: safe_unstake;
    readonly unsafe_unsupply: unsupply;
    readonly unsupply: safe_unsupply;
}

declare type event_error = {
    status: "error";
    error: Error;
};
declare type accounts_update_ok = {
    status: "ok";
    accounts: address[];
};
declare type accounts_update = accounts_update_ok | event_error;
declare type chain_update_unknown = {
    status: "unknown";
    chain: null;
    chain_id: hex_string;
};
declare type chain_update_known = {
    status: "known";
    chain: chain;
    chain_id: chain_id;
};
declare type chain_update = chain_update_unknown | chain_update_known | event_error;
declare type provider_connect_listener = {
    (): void;
};
declare type provider_disconnect_listener = {
    (err: ProviderRpcError): void;
};
declare type accounts_update_listener = {
    (update: accounts_update): void;
};
declare type chain_update_listener = {
    (update: chain_update): void;
};
declare type dynamic_listener = {
    provider_connect: provider_connect_listener;
    provider_disconnect: provider_disconnect_listener;
    accounts_update: accounts_update_listener;
    chain_update: chain_update_listener;
};
declare type on = {
    <name extends event_name>(this: AxelClientInstance, name: name, listener: dynamic_listener[name]): void;
};
declare type off = {
    <name extends event_name>(this: AxelClientInstance, name: name, listener: dynamic_listener[name]): boolean;
};

type events_d_event_error = event_error;
type events_d_accounts_update_ok = accounts_update_ok;
type events_d_accounts_update = accounts_update;
type events_d_chain_update_unknown = chain_update_unknown;
type events_d_chain_update_known = chain_update_known;
type events_d_chain_update = chain_update;
type events_d_provider_connect_listener = provider_connect_listener;
type events_d_provider_disconnect_listener = provider_disconnect_listener;
type events_d_accounts_update_listener = accounts_update_listener;
type events_d_chain_update_listener = chain_update_listener;
type events_d_dynamic_listener = dynamic_listener;
type events_d_on = on;
type events_d_off = off;
type events_d_event_name = event_name;
declare namespace events_d {
  export {
    events_d_event_error as event_error,
    events_d_accounts_update_ok as accounts_update_ok,
    events_d_accounts_update as accounts_update,
    events_d_chain_update_unknown as chain_update_unknown,
    events_d_chain_update_known as chain_update_known,
    events_d_chain_update as chain_update,
    events_d_provider_connect_listener as provider_connect_listener,
    events_d_provider_disconnect_listener as provider_disconnect_listener,
    events_d_accounts_update_listener as accounts_update_listener,
    events_d_chain_update_listener as chain_update_listener,
    events_d_dynamic_listener as dynamic_listener,
    events_d_on as on,
    events_d_off as off,
    events_d_event_name as event_name,
    event_names as names,
  };
}

declare class transaction_looker {
    client: AxelCoreClient;
    tx_hash: hex_string$1;
    poll_rate: uint$1;
    constructor(client: AxelCoreClient, tx_hash: hex_string$1, poll_rate?: uint$1);
    wait(): Promise<any>;
}

type index_d_transaction_looker = transaction_looker;
declare const index_d_transaction_looker: typeof transaction_looker;
declare namespace index_d {
  export {
    index_d_transaction_looker as transaction_looker,
  };
}

declare const Client: ClientStatic;

export { AxelClientInstance, Client, EIP_1193_d as EIP_1193, actions_d as actions, address_d as address, api_key_d as api_key, apy_d as apy, chains_d as chains, err_d as err, events_d as events, gas_priority_d as gas_priority, hex_string_d as hex_string, index_d as lookers, protocols_d as protocols, tokens_d as tokens };
