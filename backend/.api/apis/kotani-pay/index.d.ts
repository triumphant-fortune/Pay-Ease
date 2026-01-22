import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * This endpoint is used to check for the health of the application
     *
     * @summary Check for the application health
     * @throws FetchError<503, types.HealthControllerCheckResponse503> The Health Check is not successful
     */
    healthController_check(): Promise<FetchResponse<200, types.HealthControllerCheckResponse200>>;
    /**
     * This endpoint will help you create an integrator
     *
     * @summary Create an integrator
     * @throws FetchError<400, types.IntegratorControllerCreateIntegratorResponse400>
     * @throws FetchError<401, types.IntegratorControllerCreateIntegratorResponse401>
     */
    integratorController_createIntegrator(body: types.IntegratorControllerCreateIntegratorBodyParam): Promise<FetchResponse<200, types.IntegratorControllerCreateIntegratorResponse200>>;
    /**
     * This endpoint is used to retrieve an integrator details
     *
     * @summary Get an Integrator Details.
     * @throws FetchError<400, types.IntegratorControllerGetIntegratorResponse400>
     * @throws FetchError<401, types.IntegratorControllerGetIntegratorResponse401>
     * @throws FetchError<404, types.IntegratorControllerGetIntegratorResponse404>
     */
    integratorController_getIntegrator(): Promise<FetchResponse<200, types.IntegratorControllerGetIntegratorResponse200>>;
    /**
     * Login to your integrator account. This endpoint allows you to login to your account
     *
     * @summary Authentication Login
     * @throws FetchError<400, types.AuthControllerAuthLoginResponse400>
     * @throws FetchError<500, types.AuthControllerAuthLoginResponse500>
     */
    authController_authLogin(body: types.AuthControllerAuthLoginBodyParam): Promise<FetchResponse<200, types.AuthControllerAuthLoginResponse200>>;
    /**
     * This endpoint is used to generate an the API Key which can be used to authorize
     * transactions and more
     *
     * @summary Generate API Key.
     * @throws FetchError<400, types.AuthControllerGenerateApiKeySecretResponse400>
     * @throws FetchError<403, types.AuthControllerGenerateApiKeySecretResponse403>
     * @throws FetchError<404, types.AuthControllerGenerateApiKeySecretResponse404>
     * @throws FetchError<500, types.AuthControllerGenerateApiKeySecretResponse500>
     */
    authController_generateApiKeySecret(): Promise<FetchResponse<200, types.AuthControllerGenerateApiKeySecretResponse200>>;
    /**
     * This endpoint will create a fiat wallet for the integrator.
     *
     * @summary Create a Fiat Wallet
     * @throws FetchError<400, types.FiatWalletControllerCreateFiatWalletResponse400>
     * @throws FetchError<401, types.FiatWalletControllerCreateFiatWalletResponse401>
     */
    fiatWalletController_createFiatWallet(body: types.FiatWalletControllerCreateFiatWalletBodyParam): Promise<FetchResponse<200, types.FiatWalletControllerCreateFiatWalletResponse200>>;
    /**
     * This endpoint will return all the fiat wallets created by the integrator.
     *
     * @summary Get Integrator Fiat Wallets
     * @throws FetchError<401, types.FiatWalletControllerGetUsersFiatWalletResponse401>
     */
    fiatWalletController_getUsersFiatWallet(): Promise<FetchResponse<200, types.FiatWalletControllerGetUsersFiatWalletResponse200>>;
    /**
     * This endpoint will return the fiat wallet created by the integrator.
     *
     * @summary Get Integrator Fiat Wallet by Wallet ID
     * @throws FetchError<401, types.FiatWalletControllerGetFiatWalletResponse401>
     * @throws FetchError<404, types.FiatWalletControllerGetFiatWalletResponse404>
     */
    fiatWalletController_getFiatWallet(metadata: types.FiatWalletControllerGetFiatWalletMetadataParam): Promise<FetchResponse<200, types.FiatWalletControllerGetFiatWalletResponse200>>;
    /**
     * This endpoint will update the fiat wallet created by the integrator.
     *
     * @summary Update Integrator Fiat Wallet by Wallet ID
     * @throws FetchError<401, types.FiatWalletControllerUpdateFiatWalletResponse401>
     * @throws FetchError<404, types.FiatWalletControllerUpdateFiatWalletResponse404>
     */
    fiatWalletController_updateFiatWallet(body: types.FiatWalletControllerUpdateFiatWalletBodyParam, metadata: types.FiatWalletControllerUpdateFiatWalletMetadataParam): Promise<FetchResponse<200, types.FiatWalletControllerUpdateFiatWalletResponse200>>;
    /**
     * This endpoint will return the fiat wallet created by the integrator.
     *
     * @summary Get Integrator Fiat Wallet by Currency
     * @throws FetchError<401, types.FiatWalletControllerGetFiatWalletByCurrencyResponse401>
     * @throws FetchError<404, types.FiatWalletControllerGetFiatWalletByCurrencyResponse404>
     */
    fiatWalletController_getFiatWalletByCurrency(metadata: types.FiatWalletControllerGetFiatWalletByCurrencyMetadataParam): Promise<FetchResponse<200, types.FiatWalletControllerGetFiatWalletByCurrencyResponse200>>;
    /**
     * This endpoint will transfer the deposit balance of the fiat wallet to the main balance.
     *
     * @summary Transfer Deposit Balance
     * @throws FetchError<401, types.FiatWalletControllerTransferDepositBalanceResponse401>
     * @throws FetchError<404, types.FiatWalletControllerTransferDepositBalanceResponse404>
     */
    fiatWalletController_transferDepositBalance(body: types.FiatWalletControllerTransferDepositBalanceBodyParam): Promise<FetchResponse<200, types.FiatWalletControllerTransferDepositBalanceResponse200>>;
    /**
     * This endpoint will return all the crypto wallets created by the integrator.
     *
     * @summary Get Integrator Crypto Wallets
     * @throws FetchError<401, types.CryptoWalletControllerGetUsersCryptoWalletsResponse401>
     */
    cryptoWalletController_getUsersCryptoWallets(): Promise<FetchResponse<200, types.CryptoWalletControllerGetUsersCryptoWalletsResponse200>>;
    /**
     * This endpoint will return the crypto wallet created by the integrator by passing the
     * wallet id.
     *
     * @summary Get Integrator Crypto Wallet by Wallet ID
     * @throws FetchError<401, types.CryptoWalletControllerGetFiatWalletResponse401>
     */
    cryptoWalletController_getFiatWallet(metadata: types.CryptoWalletControllerGetFiatWalletMetadataParam): Promise<FetchResponse<200, types.CryptoWalletControllerGetFiatWalletResponse200>>;
    /**
     * An integrator can use this endpoint to create the customers who will be either receiving
     * or sending money using mobile money.
     *
     * @summary Create a mobile money customer
     * @throws FetchError<400, types.MobileMoneyCustomerControllerCreateCustomerResponse400>
     * @throws FetchError<401, types.MobileMoneyCustomerControllerCreateCustomerResponse401>
     */
    mobileMoneyCustomerController_createCustomer(body: types.MobileMoneyCustomerControllerCreateCustomerBodyParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerCreateCustomerResponse200>>;
    /**
     * An integrator can use this endpoint to get all the customers who will be either
     * receiving or sending money using mobile money.
     *
     * @summary Get all mobile money customers
     * @throws FetchError<400, types.MobileMoneyCustomerControllerGetUserCustomersResponse400>
     * @throws FetchError<401, types.MobileMoneyCustomerControllerGetUserCustomersResponse401>
     * @throws FetchError<404, types.MobileMoneyCustomerControllerGetUserCustomersResponse404>
     */
    mobileMoneyCustomerController_getUserCustomers(): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerGetUserCustomersResponse200>>;
    /**
     * An integrator can use this endpoint to update the customers who will be either receiving
     * or sending money using mobile money.
     *
     * @summary Update a mobile money customer
     * @throws FetchError<401, types.MobileMoneyCustomerControllerUpdateCustomerResponse401>
     * @throws FetchError<404, types.MobileMoneyCustomerControllerUpdateCustomerResponse404>
     */
    mobileMoneyCustomerController_updateCustomer(body: types.MobileMoneyCustomerControllerUpdateCustomerBodyParam, metadata: types.MobileMoneyCustomerControllerUpdateCustomerMetadataParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerUpdateCustomerResponse200>>;
    /**
     * An integrator can use this endpoint to get the customer who will be either receiving or
     * sending money using mobile money by passing customer key.
     *
     * @summary Get a mobile money customer by customer key
     */
    mobileMoneyCustomerController_getCustomerDetails(metadata: types.MobileMoneyCustomerControllerGetCustomerDetailsMetadataParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerGetCustomerDetailsResponse200>>;
    /**
     * An integrator can use this endpoint to get the customer who will be either receiving or
     * sending money using mobile money by passing phone number.
     *
     * @summary Get a mobile money customer by Phone
     * @throws FetchError<401, types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneResponse401>
     * @throws FetchError<404, types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneResponse404>
     */
    mobileMoneyCustomerController_getCustomerDetailsByPhone(metadata: types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneMetadataParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneResponse200>>;
    /**
     * This api will withdraw fiat from the integrator’s fiat wallet to the customer’s mobile
     * money wallet.
     *
     * @summary Withdraw Fiat to Mobile Money
     * @throws FetchError<400, types.WithdrawControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.WithdrawControllerMobileMoneyResponse401>
     */
    withdrawController_mobileMoney(body: types.WithdrawControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.WithdrawControllerMobileMoneyResponse200>>;
    /**
     * This endpoint will return the status of the withdrawal request.
     *
     * @summary Get Withdrawal Mobile Money Status
     * @throws FetchError<401, types.WithdrawControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.WithdrawControllerGetWithdrawalStatusResponse404>
     */
    withdrawController_getWithdrawalStatus(metadata: types.WithdrawControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.WithdrawControllerGetWithdrawalStatusResponse200>>;
    /**
     * An integrator’s customers can initiate a deposit from their respective mobile money
     * wallets.     An STK push will be sent to the customer and the respective amount will be
     * deducted from their mobile money wallets and deposited into the integrator’s fiat wallet
     *
     * @summary Deposit via mobile money
     * @throws FetchError<400, types.DepositMobileMoneyControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.DepositMobileMoneyControllerMobileMoneyResponse401>
     */
    depositMobileMoneyController_mobileMoney(body: types.DepositMobileMoneyControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.DepositMobileMoneyControllerMobileMoneyResponse200>>;
    /**
     * An integrator can use this endpoint to check the status of a deposit
     *
     * @summary Get Deposit on Mobile Money status
     * @throws FetchError<400, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse400>
     * @throws FetchError<401, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse404>
     */
    depositMobileMoneyController_getWithdrawalStatus(metadata: types.DepositMobileMoneyControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse200>>;
    /**
     * Customer Completed transaction using Checkout Url
     *
     * @summary Deposit via bank checkout
     * @throws FetchError<400, types.DepositBankCheckoutControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.DepositBankCheckoutControllerMobileMoneyResponse401>
     */
    depositBankCheckoutController_mobileMoney(body: types.DepositBankCheckoutControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.DepositBankCheckoutControllerMobileMoneyResponse200>>;
    /**
     * An integrator can use this endpoint to check the status of a deposit
     *
     * @summary Get Deposit status
     * @throws FetchError<400, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse400>
     * @throws FetchError<401, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse404>
     */
    depositBankCheckoutController_getWithdrawalStatus(metadata: types.DepositBankCheckoutControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse200>>;
    /**
     * Customer Completed transaction using Checkout Url
     *
     * @summary Deposit via card
     * @throws FetchError<400, types.DepositCardControllerCardDepositResponse400>
     * @throws FetchError<401, types.DepositCardControllerCardDepositResponse401>
     */
    depositCardController_cardDeposit(body: types.DepositCardControllerCardDepositBodyParam): Promise<FetchResponse<200, types.DepositCardControllerCardDepositResponse200>>;
    /**
     * An integrator can use this endpoint to check the status of a deposit
     *
     * @summary Get Deposit status
     * @throws FetchError<400, types.DepositCardControllerGetWithdrawalStatusResponse400>
     * @throws FetchError<401, types.DepositCardControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.DepositCardControllerGetWithdrawalStatusResponse404>
     */
    depositCardController_getWithdrawalStatus(metadata: types.DepositCardControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.DepositCardControllerGetWithdrawalStatusResponse200>>;
    /**
     * ## 🔄 Complete Crypto Deposit Flow
     *
     *       ### Prerequisites
     *       **IMPORTANT:** You must create a crypto wallet for each the specifi chain in test
     * before using this endpoint.
     *
     *
     *       ### Customer Action Required
     *       After calling this endpoint, instruct your customer to send **exactly** the
     * specified amount of the token on the given chain to the returned
     * `integrator_wallet_address`.
     *
     *       ### Real-time Detection
     *       - Transaction detected within 1-2 minutes
     *       - Automatic confirmation tracking
     *       - Status updates sent to your callback_url when confirmations are met
     *
     *       ### Callback Example
     *       When the transaction is confirmed, you'll receive:
     *       ```json
     *       {
     *         "id": "68e61c25aa1eded97317154b",
     *         "status": "SUCCESSFUL",
     *         "amount": 100.5,
     *         "transaction_hash": "0xe55b003df...",
     *         "confirmations": 15,
     *         "reference_id": "your_ref_123"
     *       }
     *       ```
     *
     *       ### Supported Chains & Tokens
     *       - **ETHEREUM**: USDC, USDT
     *       - **POLYGON**: USDC, USDT
     *       - **BASE**: USDC, USDT
     *       - **ARBITRUM**: USDC
     *       - **OPTIMISM**: USDC
     *       - **AVALANCHE**: USDC
     *       - **CELO**: CUSD, USDC,
     *
     * @summary Create crypto deposit request
     * @throws FetchError<400, types.DepositCryptoIntegratorControllerCreateCryptoDepositResponse400>
     * @throws FetchError<401, types.DepositCryptoIntegratorControllerCreateCryptoDepositResponse401>
     */
    depositCryptoIntegratorController_createCryptoDeposit(body: types.DepositCryptoIntegratorControllerCreateCryptoDepositBodyParam): Promise<FetchResponse<200, types.DepositCryptoIntegratorControllerCreateCryptoDepositResponse200>>;
    /**
     * ## 📊 Check Crypto Deposit Status
     *
     *       Retrieve the current status and details of a crypto deposit using the
     * reference_id.
     *
     *       ### Status Values
     *       - **PENDING**: Waiting for blockchain transaction or insufficient confirmations
     *       - **SUCCESSFUL**: Transaction confirmed with required confirmations
     *       - **FAILED**: Transaction failed or rejected
     *
     *       ### Response Details
     *       When `status = "SUCCESSFUL"`, the response includes:
     *       - `transaction_hash`: Blockchain transaction hash
     *       - `confirmations`: Current confirmation count
     *       - `sender_address`: Customer's wallet address
     *       - `integrator_wallet_address`: Your wallet address that received the crypto
     *
     *       ### Usage
     *       Use this endpoint to:
     *       - Check status when callbacks fail
     *       - Implement fallback status checking
     *       - Debug transaction issues
     *       - Provide status updates to customers
     *
     * @summary Get crypto deposit status
     * @throws FetchError<400, types.DepositCryptoIntegratorControllerGetCryptoDepositStatusResponse400>
     * @throws FetchError<401, types.DepositCryptoIntegratorControllerGetCryptoDepositStatusResponse401>
     * @throws FetchError<404, types.DepositCryptoIntegratorControllerGetCryptoDepositStatusResponse404>
     */
    depositCryptoIntegratorController_getCryptoDepositStatus(metadata: types.DepositCryptoIntegratorControllerGetCryptoDepositStatusMetadataParam): Promise<FetchResponse<200, types.DepositCryptoIntegratorControllerGetCryptoDepositStatusResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two currencies
     *
     * @summary Get exchange rate
     * @throws FetchError<401, types.RateControllerGetRatesResponse401>
     */
    rateController_getRates(metadata: types.RateControllerGetRatesMetadataParam): Promise<FetchResponse<200, types.RateControllerGetRatesResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two currencies
     *
     * @summary Get Onramp Exchange rate
     * @throws FetchError<401, types.RateControllerGetOnrampRatesResponse401>
     */
    rateController_getOnrampRates(body: types.RateControllerGetOnrampRatesBodyParam): Promise<FetchResponse<200, types.RateControllerGetOnrampRatesResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two currencies. You
     * can provide either cryptoAmount or fiatAmount, but not both. The system will calculate
     * the other value.
     *
     * @summary Get Offramp Exchange rate
     * @throws FetchError<401, types.RateControllerGetOffRampRatesResponse401>
     */
    rateController_getOffRampRates(body: types.RateControllerGetOffRampRatesBodyParam): Promise<FetchResponse<200, types.RateControllerGetOffRampRatesResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two fiat currencies
     *
     * @summary Get Fiat to Fiat exchange rate
     * @throws FetchError<401, types.RateControllerGetFiatToFiatRateResponse401>
     */
    rateController_getFiatToFiatRate(body: types.RateControllerGetFiatToFiatRateBodyParam): Promise<FetchResponse<200, types.RateControllerGetFiatToFiatRateResponse200>>;
    /**
     * An integrator can use this endpoint to get all the exchange rates available
     *
     * @summary Get all exchange rates
     * @throws FetchError<401, types.RateControllerRatesResponse401>
     */
    rateController_rates(): Promise<FetchResponse<200, types.RateControllerRatesResponse200>>;
    /**
     * This Api Handles payout to bank, currently only supports SA Banks
     *
     * @summary BANK WITHDRAWAL
     * @throws FetchError<400, types.WithdrawTransactionControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.WithdrawTransactionControllerMobileMoneyResponse401>
     */
    withdrawTransactionController_mobileMoney(body: types.WithdrawTransactionControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.WithdrawTransactionControllerMobileMoneyResponse200>>;
    /**
     * This Api Handles payout to bank, currently only supports SA Banks
     *
     * @summary BANK WITHDRAWAL STATUS
     */
    withdrawTransactionController_getWithdrawTransaction(metadata: types.WithdrawTransactionControllerGetWithdrawTransactionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This Api Handles fetching of supporting banks
     *
     * @summary GET SUPPORTING BANKS
     */
    withdrawTransactionController_getSupportingBanksWithCurrency(metadata: types.WithdrawTransactionControllerGetSupportingBanksWithCurrencyMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This api will create a new kyc basic details
     *
     * @summary Create Kyc Basic Details
     */
    kycController_createKyc(body: types.KycControllerCreateKycBodyParam): Promise<FetchResponse<200, types.KycControllerCreateKycResponse200>>;
    /**
     * This api will create a new kyc address
     *
     * @summary Create Kyc Address
     */
    kycController_createAddress(body: types.KycControllerCreateAddressBodyParam): Promise<FetchResponse<200, types.KycControllerCreateAddressResponse200>>;
    /**
     * This api will create a new kyc document
     *
     * @summary Create Kyc Document
     */
    kycController_createDocument(body: types.KycControllerCreateDocumentBodyParam): Promise<FetchResponse<200, types.KycControllerCreateDocumentResponse200>>;
    /**
     * This api will get kyc status
     *
     * @summary Get Kyc Status
     */
    kycController_verifyKyc(metadata: types.KycControllerVerifyKycMetadataParam): Promise<FetchResponse<200, types.KycControllerVerifyKycResponse200>>;
    /**
     * This api will get all integrator kyc users
     *
     * @summary Get Integrator Kyc Users
     * @throws FetchError<401, types.KycControllerIntegratorKycUsersResponse401>
     */
    kycController_integratorKycUsers(): Promise<FetchResponse<200, types.KycControllerIntegratorKycUsersResponse200>>;
    /**
     * This endpoint will create a offramp request for a customer. If the fiat transfer fails
     * after successful crypto receipt, an automatic refund will be initiated after 5 minutes.
     * Use the refund-status endpoint to check refund status.
     *
     * @summary Offramp Request
     * @throws FetchError<400, types.OffRampControllerCreateOfframpResponse400>
     * @throws FetchError<401, types.OffRampControllerCreateOfframpResponse401>
     */
    offRampController_createOfframp(body: types.OffRampControllerCreateOfframpBodyParam): Promise<FetchResponse<200, types.OffRampControllerCreateOfframpResponse200>>;
    /**
     * This endpoint will return all offramp transactions for the integrator.
     *
     * @summary Get Integrator Offramp Transactions
     * @throws FetchError<401, types.OffRampControllerGetIntegratorOfframpsResponse401>
     */
    offRampController_getIntegratorOfframps(): Promise<FetchResponse<200, types.OffRampControllerGetIntegratorOfframpsResponse200>>;
    /**
     * This endpoint will return the status of the withdrawal request.
     *
     * @summary Get Offramp MobileMoney Status
     * @throws FetchError<401, types.OffRampControllerGetOfframpStatusResponse401>
     * @throws FetchError<404, types.OffRampControllerGetOfframpStatusResponse404>
     */
    offRampController_getOfframpStatus(metadata: types.OffRampControllerGetOfframpStatusMetadataParam): Promise<FetchResponse<200, types.OffRampControllerGetOfframpStatusResponse200>>;
    /**
     * This endpoint will cancel the offramp transaction.
     *
     * @summary Cancel Offramp Transaction
     * @throws FetchError<401, types.OffRampControllerGetCancelTransactionResponse401>
     * @throws FetchError<404, types.OffRampControllerGetCancelTransactionResponse404>
     */
    offRampController_getCancelTransaction(metadata: types.OffRampControllerGetCancelTransactionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get the status of an onchain refund. Refunds are automatically initiated 5 minutes after
     * a failed transaction if the crypto was successfully received but fiat transfer failed.
     *
     * @summary Get Refund Status
     */
    offRampController_getRefundStatus(metadata: types.OffRampControllerGetRefundStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retry a failed crypto refund for an offramp transaction. Can be retried up to 3 times.
     *
     * @summary Retry Failed Refund
     * @throws FetchError<400, types.OffRampControllerRetryRefundResponse400>
     * @throws FetchError<401, types.OffRampControllerRetryRefundResponse401>
     * @throws FetchError<404, types.OffRampControllerRetryRefundResponse404>
     */
    offRampController_retryRefund(metadata: types.OffRampControllerRetryRefundMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint will send token to any crypto wallet
     *
     * @summary Send Token to Crypto Wallet
     * @throws FetchError<400, types.OnrampControllerCreateOnrampCryptoResponse400>
     * @throws FetchError<401, types.OnrampControllerCreateOnrampCryptoResponse401>
     */
    onrampController_createOnrampCrypto(body: types.OnrampControllerCreateOnrampCryptoBodyParam): Promise<FetchResponse<200, types.OnrampControllerCreateOnrampCryptoResponse200>>;
    /**
     * This endpoint will be used to get the status of the transaction
     *
     * @summary Get Status Response
     * @throws FetchError<400, types.OnrampControllerGetOnrampCryptoResponse400>
     * @throws FetchError<401, types.OnrampControllerGetOnrampCryptoResponse401>
     * @throws FetchError<404, types.OnrampControllerGetOnrampCryptoResponse404>
     */
    onrampController_getOnrampCrypto(metadata: types.OnrampControllerGetOnrampCryptoMetadataParam): Promise<FetchResponse<200, types.OnrampControllerGetOnrampCryptoResponse200>>;
    /**
     * This endpoint will return all onramp transactions for the integrator.
     *
     * @summary Get Integrator Onramp Transactions
     * @throws FetchError<401, types.OnrampControllerGetIntegratorOnrampsResponse401>
     */
    onrampController_getIntegratorOnramps(): Promise<FetchResponse<200, types.OnrampControllerGetIntegratorOnrampsResponse200>>;
    /**
     * You can create an onramp request with either mobile money or bank checkout
     *
     * @summary Create Onramp
     * @throws FetchError<400, types.OnrampControllerOnrampResponse400>
     * @throws FetchError<401, types.OnrampControllerOnrampResponse401>
     */
    onrampController_onramp(body: types.OnrampControllerOnrampBodyParam): Promise<FetchResponse<200, types.OnrampControllerOnrampResponse200>>;
    /**
     * This endpoint will be used to get the status of the transaction
     *
     * @summary Get Status Response
     * @throws FetchError<400, types.OnrampControllerGetOnrampResponse400>
     * @throws FetchError<401, types.OnrampControllerGetOnrampResponse401>
     * @throws FetchError<404, types.OnrampControllerGetOnrampResponse404>
     */
    onrampController_getOnramp(metadata: types.OnrampControllerGetOnrampMetadataParam): Promise<FetchResponse<200, types.OnrampControllerGetOnrampResponse200>>;
    /**
     * Generate Invoice
     *
     * @summary Generate Invoice
     * @throws FetchError<400, types.FiatToFiatControllerGenerateInvoiceResponse400>
     * @throws FetchError<401, types.FiatToFiatControllerGenerateInvoiceResponse401>
     */
    fiatToFiatController_generateInvoice(body: types.FiatToFiatControllerGenerateInvoiceBodyParam): Promise<FetchResponse<200, types.FiatToFiatControllerGenerateInvoiceResponse200>>;
    /**
     * Get Invoice
     *
     * @summary Get Invoice
     * @throws FetchError<400, types.FiatToFiatControllerGetInvoiceResponse400>
     * @throws FetchError<401, types.FiatToFiatControllerGetInvoiceResponse401>
     */
    fiatToFiatController_getInvoice(metadata: types.FiatToFiatControllerGetInvoiceMetadataParam): Promise<FetchResponse<200, types.FiatToFiatControllerGetInvoiceResponse200>>;
    /**
     * Pay Invoice
     *
     * @summary Pay Invoice
     * @throws FetchError<400, types.FiatToFiatControllerPayInvoiceResponse400>
     * @throws FetchError<401, types.FiatToFiatControllerPayInvoiceResponse401>
     */
    fiatToFiatController_payInvoice(body: types.FiatToFiatControllerPayInvoiceBodyParam): Promise<FetchResponse<200, types.FiatToFiatControllerPayInvoiceResponse200>>;
    /**
     * Get Paid Invoice Status
     *
     * @summary Get Paid Invoice Status
     * @throws FetchError<400, types.FiatToFiatControllerGetPaidInvoiceStatusResponse400>
     * @throws FetchError<401, types.FiatToFiatControllerGetPaidInvoiceStatusResponse401>
     */
    fiatToFiatController_getPaidInvoiceStatus(metadata: types.FiatToFiatControllerGetPaidInvoiceStatusMetadataParam): Promise<FetchResponse<200, types.FiatToFiatControllerGetPaidInvoiceStatusResponse200>>;
    /**
     * Send a standard SMS message
     *
     * @summary Send SMS
     */
    smsController_sendSms(body: types.SmsControllerSendSmsBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Register a webhook client to receive SMS notifications
     *
     * @summary Register SMS Webhook
     */
    smsController_registerWebhook(body: types.SmsControllerRegisterWebhookBodyParam): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export default createSDK;
