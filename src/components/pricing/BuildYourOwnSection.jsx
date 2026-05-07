"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function BuildYourOwnSection({ data }) {
  const [selectedBase, setSelectedBase] = useState("");
  const [selectedSupport, setSelectedSupport] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);

  const baseService = data.base.find((item) => item.id === selectedBase);
  const supportService = data.support.find((item) => item.id === selectedSupport);
  const addOnServices = data.addons.filter((item) => selectedAddons.includes(item.id));

  const totals = useMemo(() => {
    const base = baseService?.price ?? 0;
    const support = supportService?.price ?? 0;
    const addons = addOnServices.reduce((sum, item) => sum + item.price, 0);
    const separate = base + support + addons;
    const bundle = Math.round(separate * 0.88);
    const saving = separate > 0 ? separate - bundle : 0;
    return { separate, bundle, saving };
  }, [baseService, supportService, addOnServices]);

  const progressCount = (baseService ? 1 : 0) + (selectedAddons.length > 0 ? 1 : 0) + (supportService ? 1 : 0);
  const progress = Math.round((progressCount / 3) * 100);

  const recommendation = useMemo(() => {
    if (!baseService) return "Choose your base service to unlock a realistic package estimate.";
    if (!supportService) return "Add a support level to protect your investment and keep results consistent.";
    if (!selectedAddons.length) return "Add one or two services to increase lead quality and long-term ROI.";
    return "Great package structure. You are combining setup + growth services like a serious business.";
  }, [baseService, supportService, selectedAddons.length]);

  const formatPrice = (value) => `£${value}`;

  const onToggleAddOn = (id) => {
    setSelectedAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <section id="build-package" className="py-12 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-3">
          {data.title}
        </h2>
        <p className="text-center text-gray-700 mb-8 max-w-4xl mx-auto">
          {data.description}
        </p>

        <div className="mb-6 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-navy">Builder Progress</p>
              <p className="text-xs text-gray-600">Complete all 3 steps for a stronger quote.</p>
            </div>
            <p className="text-sm font-semibold text-red">{progress}% complete</p>
          </div>
          <div className="mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-red transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm xl:col-span-1">
            <h3 className="text-lg font-semibold text-navy mb-3">Step 1: Choose Your Base</h3>
            <div className="space-y-2">
              {data.base.map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center justify-between gap-3 text-sm rounded-lg border p-2 cursor-pointer ${
                    selectedBase === item.id ? "border-red bg-red/5" : "border-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2 text-gray-800">
                  <input
                    type="radio"
                    name="base"
                    value={item.id}
                    checked={selectedBase === item.id}
                    onChange={(event) => setSelectedBase(event.target.value)}
                  />
                    {item.name}
                  </span>
                  <span className="font-semibold text-navy">
                    {formatPrice(item.price)}
                    {item.unit}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm xl:col-span-1">
            <h3 className="text-lg font-semibold text-navy mb-3">
              Step 2: Add Extra Services
            </h3>
            <div className="space-y-2 max-h-80 overflow-auto pr-2">
              {data.addons.map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center justify-between gap-3 text-sm rounded-lg border p-2 cursor-pointer ${
                    selectedAddons.includes(item.id) ? "border-red bg-red/5" : "border-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2 text-gray-800">
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(item.id)}
                    onChange={() => onToggleAddOn(item.id)}
                  />
                    {item.name}
                  </span>
                  <span className="font-semibold text-navy">
                    {formatPrice(item.price)}
                    {item.unit}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm xl:col-span-1">
            <h3 className="text-lg font-semibold text-navy mb-3">
              Step 3: Choose Support Level
            </h3>
            <div className="space-y-2">
              {data.support.map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center justify-between gap-3 text-sm rounded-lg border p-2 cursor-pointer ${
                    selectedSupport === item.id ? "border-red bg-red/5" : "border-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2 text-gray-800">
                  <input
                    type="radio"
                    name="support"
                    value={item.id}
                    checked={selectedSupport === item.id}
                    onChange={(event) => setSelectedSupport(event.target.value)}
                  />
                    {item.name}
                  </span>
                  <span className="font-semibold text-navy">
                    {formatPrice(item.price)}
                    {item.unit}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm xl:col-span-1">
            <h3 className="text-lg font-semibold text-navy">Your Custom Quote</h3>
            <p className="text-xs text-gray-600 mt-1">{recommendation}</p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-700">
                Base Service:{" "}
                <span className="font-semibold text-navy">{baseService?.name ?? "Not selected"}</span>
              </p>
              <p className="text-gray-700">
                Add-ons: <span className="font-semibold text-navy">{selectedAddons.length}</span>
              </p>
              <p className="text-gray-700">
                Support:{" "}
                <span className="font-semibold text-navy">
                  {supportService?.name ?? "Not selected"}
                </span>
              </p>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-gray-100 space-y-1">
              <p className="text-sm text-gray-700">
                Separate Total: <span className="font-semibold text-navy">{formatPrice(totals.separate)}</span>
              </p>
              <p className="text-sm text-gray-700">
                Discounted Bundle: <span className="font-semibold text-navy">{formatPrice(totals.bundle)}</span>
              </p>
              <p className="text-sm font-semibold text-green-700">
                You Save: {formatPrice(totals.saving)}
              </p>
            </div>

            {addOnServices.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {addOnServices.slice(0, 4).map((item) => (
                  <span
                    key={item.id}
                    className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full"
                  >
                    {item.name}
                  </span>
                ))}
                {addOnServices.length > 4 ? (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    +{addOnServices.length - 4} more
                  </span>
                ) : null}
              </div>
            ) : null}

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                className="inline-block text-center px-4 py-2 rounded-lg bg-red text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Build My Package
              </Link>
              <Link
                href="https://wa.me/447443098117"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-4 py-2 rounded-lg bg-gray-100 text-navy text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Discuss on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

