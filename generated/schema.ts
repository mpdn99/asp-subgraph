// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Buy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Buy entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Buy must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Buy", id.toString(), this);
    }
  }

  static load(id: string): Buy | null {
    return changetype<Buy | null>(store.get("Buy", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get projectSlug(): string {
    let value = this.get("projectSlug");
    return value!.toString();
  }

  set projectSlug(value: string) {
    this.set("projectSlug", Value.fromString(value));
  }

  get refSlug(): string | null {
    let value = this.get("refSlug");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set refSlug(value: string | null) {
    if (!value) {
      this.unset("refSlug");
    } else {
      this.set("refSlug", Value.fromString(<string>value));
    }
  }

  get buyAmount(): BigInt {
    let value = this.get("buyAmount");
    return value!.toBigInt();
  }

  set buyAmount(value: BigInt) {
    this.set("buyAmount", Value.fromBigInt(value));
  }

  get paymentAmount(): BigInt {
    let value = this.get("paymentAmount");
    return value!.toBigInt();
  }

  set paymentAmount(value: BigInt) {
    this.set("paymentAmount", Value.fromBigInt(value));
  }

  get systemProfit(): BigInt {
    let value = this.get("systemProfit");
    return value!.toBigInt();
  }

  set systemProfit(value: BigInt) {
    this.set("systemProfit", Value.fromBigInt(value));
  }
}

export class Report extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Report entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Report must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Report", id.toString(), this);
    }
  }

  static load(id: string): Report | null {
    return changetype<Report | null>(store.get("Report", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get projectSlug(): string {
    let value = this.get("projectSlug");
    return value!.toString();
  }

  set projectSlug(value: string) {
    this.set("projectSlug", Value.fromString(value));
  }

  get refSlug(): string | null {
    let value = this.get("refSlug");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set refSlug(value: string | null) {
    if (!value) {
      this.unset("refSlug");
    } else {
      this.set("refSlug", Value.fromString(<string>value));
    }
  }

  get totalBuyAmount(): BigInt {
    let value = this.get("totalBuyAmount");
    return value!.toBigInt();
  }

  set totalBuyAmount(value: BigInt) {
    this.set("totalBuyAmount", Value.fromBigInt(value));
  }

  get totalPaymentAmount(): BigInt {
    let value = this.get("totalPaymentAmount");
    return value!.toBigInt();
  }

  set totalPaymentAmount(value: BigInt) {
    this.set("totalPaymentAmount", Value.fromBigInt(value));
  }

  get totalSystemProfit(): BigInt {
    let value = this.get("totalSystemProfit");
    return value!.toBigInt();
  }

  set totalSystemProfit(value: BigInt) {
    this.set("totalSystemProfit", Value.fromBigInt(value));
  }
}
