import React from 'react';
import { 
  ShieldCheck, 
  History, 
  Layers, 
  Building2, 
  Award, 
  CheckCircle,
  FileCheck2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <section className="trust-bar-section">
      <div className="container">
        {/* Distinction Banner */}
        <div className="distinction-callout">
          <div className="distinction-icon-box">
            <ShieldCheck size={28} className="distinction-icon" />
          </div>
          <div className="distinction-text">
            <h4 className="distinction-title">
              Founding Credential & Leadership Profile
            </h4>
            <p className="distinction-body">
              <strong>JK Engineers & Enterprises</strong> is an engineering venture established in <strong>April 2026</strong>, founded on <strong>20+ years</strong> of hands-on process engineering, mega project execution (₹100+ Cr & ₹600 Cr greenfield facilities), and cGMP/USFDA plant qualification delivered by founder <strong>Janaki Ram Kandikanti</strong>.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Proven Engineering Capability */}
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-item-header">
              <History size={22} className="trust-icon-red" />
              <span className="trust-item-title">20+ Years Track Record</span>
            </div>
            <p className="trust-item-desc">
              End-to-end expertise spanning process design, P&IDs, equipment sizing, and full lifecycle execution.
            </p>
          </div>

          <div className="trust-item">
            <div className="trust-item-header">
              <Building2 size={22} className="trust-icon-red" />
              <span className="trust-item-title">₹100+ Cr Core Project Scale</span>
            </div>
            <p className="trust-item-desc">
              Direct technical and managerial leadership over multi-crore greenfield & brownfield API manufacturing setups.
            </p>
          </div>

          <div className="trust-item">
            <div className="trust-item-header">
              <FileCheck2 size={22} className="trust-icon-red" />
              <span className="trust-item-title">cGMP & USFDA Orientation</span>
            </div>
            <p className="trust-item-desc">
              Thorough validation lifecycle from URS, DQ, IQ, OQ to PQ with award-winning documentation simplification.
            </p>
          </div>

          <div className="trust-item">
            <div className="trust-item-header">
              <Award size={22} className="trust-icon-red" />
              <span className="trust-item-title">DuPont CSM Safety Champion</span>
            </div>
            <p className="trust-item-desc">
              Zero-incident safety culture certified under DuPont Contractor Safety Management guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
