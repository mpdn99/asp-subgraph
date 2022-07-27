// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class LogBuy extends ethereum.Event {
  get params(): LogBuy__Params {
    return new LogBuy__Params(this);
  }
}

export class LogBuy__Params {
  _event: LogBuy;

  constructor(event: LogBuy) {
    this._event = event;
  }

  get projectSlug(): string {
    return this._event.parameters[0].value.toString();
  }

  get refSlug(): string {
    return this._event.parameters[1].value.toString();
  }

  get buyAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get paymentAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get systemProfit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LogRegisterProject extends ethereum.Event {
  get params(): LogRegisterProject__Params {
    return new LogRegisterProject__Params(this);
  }
}

export class LogRegisterProject__Params {
  _event: LogRegisterProject;

  constructor(event: LogRegisterProject) {
    this._event = event;
  }

  get slug(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class IDO__getProjectInformationResultValue0Struct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get idoToken(): Address {
    return this[1].toAddress();
  }

  get paymentToken(): Address {
    return this[2].toAddress();
  }

  get sellRate(): BigInt {
    return this[3].toBigInt();
  }

  get startAt(): BigInt {
    return this[4].toBigInt();
  }

  get endAt(): BigInt {
    return this[5].toBigInt();
  }

  get interestRatePerThousand(): BigInt {
    return this[6].toBigInt();
  }
}

export class IDO extends ethereum.SmartContract {
  static bind(address: Address): IDO {
    return new IDO("IDO", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getProjectId(slug: string): BigInt {
    let result = super.call("getProjectId", "getProjectId(string):(uint256)", [
      ethereum.Value.fromString(slug)
    ]);

    return result[0].toBigInt();
  }

  try_getProjectId(slug: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getProjectId",
      "getProjectId(string):(uint256)",
      [ethereum.Value.fromString(slug)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getProjectInformation(
    slug: string
  ): IDO__getProjectInformationResultValue0Struct {
    let result = super.call(
      "getProjectInformation",
      "getProjectInformation(string):((address,address,address,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromString(slug)]
    );

    return changetype<IDO__getProjectInformationResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getProjectInformation(
    slug: string
  ): ethereum.CallResult<IDO__getProjectInformationResultValue0Struct> {
    let result = super.tryCall(
      "getProjectInformation",
      "getProjectInformation(string):((address,address,address,uint256,uint256,uint256,uint256))",
      [ethereum.Value.fromString(slug)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<IDO__getProjectInformationResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyHash(hash: Bytes, v: i32, r: Bytes, s: Bytes): Address {
    let result = super.call(
      "verifyHash",
      "verifyHash(bytes32,uint8,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(hash),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toAddress();
  }

  try_verifyHash(
    hash: Bytes,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "verifyHash",
      "verifyHash(bytes32,uint8,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(hash),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AdminCall extends ethereum.Call {
  get inputs(): AdminCall__Inputs {
    return new AdminCall__Inputs(this);
  }

  get outputs(): AdminCall__Outputs {
    return new AdminCall__Outputs(this);
  }
}

export class AdminCall__Inputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }
}

export class AdminCall__Outputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }

  get admin_(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall extends ethereum.Call {
  get inputs(): ChangeAdminCall__Inputs {
    return new ChangeAdminCall__Inputs(this);
  }

  get outputs(): ChangeAdminCall__Outputs {
    return new ChangeAdminCall__Outputs(this);
  }
}

export class ChangeAdminCall__Inputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall__Outputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }
}

export class ImplementationCall extends ethereum.Call {
  get inputs(): ImplementationCall__Inputs {
    return new ImplementationCall__Inputs(this);
  }

  get outputs(): ImplementationCall__Outputs {
    return new ImplementationCall__Outputs(this);
  }
}

export class ImplementationCall__Inputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }
}

export class ImplementationCall__Outputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }

  get implementation_(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

export class AddOperatorCall extends ethereum.Call {
  get inputs(): AddOperatorCall__Inputs {
    return new AddOperatorCall__Inputs(this);
  }

  get outputs(): AddOperatorCall__Outputs {
    return new AddOperatorCall__Outputs(this);
  }
}

export class AddOperatorCall__Inputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addFlag(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class AddOperatorCall__Outputs {
  _call: AddOperatorCall;

  constructor(call: AddOperatorCall) {
    this._call = call;
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get _ref(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _slug(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _paymentAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class ClaimCommissionCall extends ethereum.Call {
  get inputs(): ClaimCommissionCall__Inputs {
    return new ClaimCommissionCall__Inputs(this);
  }

  get outputs(): ClaimCommissionCall__Outputs {
    return new ClaimCommissionCall__Outputs(this);
  }
}

export class ClaimCommissionCall__Inputs {
  _call: ClaimCommissionCall;

  constructor(call: ClaimCommissionCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _requestId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class ClaimCommissionCall__Outputs {
  _call: ClaimCommissionCall;

  constructor(call: ClaimCommissionCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RegisterOrChangeProjectInformationCall extends ethereum.Call {
  get inputs(): RegisterOrChangeProjectInformationCall__Inputs {
    return new RegisterOrChangeProjectInformationCall__Inputs(this);
  }

  get outputs(): RegisterOrChangeProjectInformationCall__Outputs {
    return new RegisterOrChangeProjectInformationCall__Outputs(this);
  }
}

export class RegisterOrChangeProjectInformationCall__Inputs {
  _call: RegisterOrChangeProjectInformationCall;

  constructor(call: RegisterOrChangeProjectInformationCall) {
    this._call = call;
  }

  get _slug(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _project(): RegisterOrChangeProjectInformationCall_projectStruct {
    return changetype<RegisterOrChangeProjectInformationCall_projectStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class RegisterOrChangeProjectInformationCall__Outputs {
  _call: RegisterOrChangeProjectInformationCall;

  constructor(call: RegisterOrChangeProjectInformationCall) {
    this._call = call;
  }
}

export class RegisterOrChangeProjectInformationCall_projectStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get idoToken(): Address {
    return this[1].toAddress();
  }

  get paymentToken(): Address {
    return this[2].toAddress();
  }

  get sellRate(): BigInt {
    return this[3].toBigInt();
  }

  get startAt(): BigInt {
    return this[4].toBigInt();
  }

  get endAt(): BigInt {
    return this[5].toBigInt();
  }

  get interestRatePerThousand(): BigInt {
    return this[6].toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawERC20Call extends ethereum.Call {
  get inputs(): WithdrawERC20Call__Inputs {
    return new WithdrawERC20Call__Inputs(this);
  }

  get outputs(): WithdrawERC20Call__Outputs {
    return new WithdrawERC20Call__Outputs(this);
  }
}

export class WithdrawERC20Call__Inputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawERC20Call__Outputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }
}

export class WithdrawETHCall extends ethereum.Call {
  get inputs(): WithdrawETHCall__Inputs {
    return new WithdrawETHCall__Inputs(this);
  }

  get outputs(): WithdrawETHCall__Outputs {
    return new WithdrawETHCall__Outputs(this);
  }
}

export class WithdrawETHCall__Inputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }
}

export class WithdrawETHCall__Outputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get admin_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}