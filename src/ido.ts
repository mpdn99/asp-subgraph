import { BigInt } from "@graphprotocol/graph-ts"
import {
  LogBuy
} from "../generated/IDO/IDO"
import { Buy, Report } from "../generated/schema"

export function handleLogBuy(event: LogBuy): void {
  let buy = new Buy(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  buy.projectSlug = event.params.projectSlug
  buy.refSlug = event.params.refSlug
  buy.buyAmount = event.params.buyAmount
  buy.paymentAmount = event.params.paymentAmount
  buy.systemProfit = event.params.systemProfit
  buy.save()

  let report = Report.load(event.params.projectSlug.concat(event.params.refSlug))
  if (!report) {
    report = new Report(event.params.projectSlug.concat(event.params.refSlug))
    report.projectSlug = event.params.projectSlug
    report.refSlug = event.params.refSlug
    report.totalBuyAmount = new BigInt(0)
    report.totalPaymentAmount = new BigInt(0)
    report.totalSystemProfit = new BigInt(0)
  }
  report.totalBuyAmount =  report.totalBuyAmount.plus(event.params.buyAmount)
  report.totalPaymentAmount = report.totalPaymentAmount.plus(event.params.paymentAmount)
  report.totalSystemProfit = report.totalSystemProfit.plus(event.params.systemProfit)
  report.save()
}

