"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getUpcomingEvents, getPastEvents, getWeeklyMeetups, getFeaturedEvent, rsvpEvent, type EventItem } from "@/lib/services/events";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, type User } from "firebase/auth";

const weekDays = ["S","M","T","W","T","F","S"];
const calDays: (number | null)[] = [null,null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

type TabType = "Upcoming" | "Past Events" | "Weekly Meetups";

function SkeletonEvent() {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center gap-6 animate-pulse">
      <div className="w-[60px] h-16 bg-[#e0e0e0] rounded-xl shrink-0" />
      <div className="flex-1">
        <div className="h-5 w-3/4 bg-[#e0e0e0] rounded mb-2" />
        <div className="h-4 w-1/2 bg-[#e0e0e0] rounded mb-1" />
        <div className="h-4 w-1/3 bg-[#e0e0e0] rounded" />
      </div>
      <div className="h-10 w-20 bg-[#e0e0e0] rounded-lg" />
    </div>
  );
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Upcoming");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [featured, setFeatured] = useState<EventItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [rsvped, setRsvped] = useState<Set<string>>(new Set());

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        if (activeTab === "Upcoming") {
          const [feat, data] = await Promise.all([getFeaturedEvent(), getUpcomingEvents()]);
          setFeatured(feat);
          setEvents(data.filter((e) => !feat || e.id !== feat.id));
        } else if (activeTab === "Past Events") {
          setFeatured(null);
          setEvents(await getPastEvents());
        } else {
          setFeatured(null);
          setEvents(await getWeeklyMeetups());
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [activeTab]);

  const handleRsvp = async (event: EventItem) => {
    if (!user || !event.id) return;
    const didRsvp = await rsvpEvent(event.id, user.uid);
    setRsvped((prev) => {
      const s = new Set(prev);
      if (didRsvp) s.add(event.id!); else s.delete(event.id!);
      return s;
    });
  };

  const formatDate = (event: EventItem) => {
    if (!event.dateTs) return { month: "TBD", day: "?" };
    // dateTs is a Firestore Timestamp – call toDate() if available
    const d = (event.dateTs as any).toDate ? (event.dateTs as any).toDate() : new Date(event.dateTs as any);
    return {
      month: d.toLocaleString("en", { month: "short" }).toUpperCase(),
      day: String(d.getDate()),
    };
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#d5fde2] py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl font-black text-[#002112] tracking-tight mb-3">Events &amp; Meetups</h1>
            <p className="text-[#404943] text-lg max-w-xl">
              Weekly sessions, pitching nights, and founder meetups across Pakistan.
            </p>
          </div>
          <Link href="/events/propose" className="flex items-center gap-2 bg-[#0f5238] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2d6a4f] transition-all">
            <span className="material-symbols-outlined">add</span>
            Propose an Event
          </Link>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {(["Upcoming", "Past Events", "Weekly Meetups"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 whitespace-nowrap transition-colors ${activeTab === tab ? "text-[#0f5238] font-bold border-b-2 border-[#0f5238]" : "text-[#404943] hover:text-[#0f5238]"}`}
              >
                {tab}
              </button>
            ))}
            <Link href="/events/propose" className="py-4 text-[#404943] hover:text-[#0f5238] transition-colors whitespace-nowrap ml-auto">
              Propose an Event
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Main Content */}
        <div className="flex-1">
          {/* Featured Event (Upcoming only) */}
          {activeTab === "Upcoming" && featured && (
            <div className="bg-[#0f5238] rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                🔥 FEATURED
              </span>
              <h2 className="text-3xl font-black mb-4">{featured.title}</h2>
              <div className="flex items-center gap-4 text-[#a8e7c5] text-sm mb-4">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>{featured.dateLabel}
                </span>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{featured.isOnline ? "Online" : "In-Person"}</span>
                <span className="bg-[#b4ef9d] text-[#0f5238] text-xs font-bold px-3 py-1 rounded-full">{featured.type}</span>
              </div>
              <p className="text-[#a8e7c5] mb-8 max-w-lg line-clamp-3">{featured.desc}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleRsvp(featured)}
                  className={`px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all ${rsvped.has(featured.id!) ? "bg-[#d5fde2] text-[#0f5238]" : "bg-white text-[#0f5238]"}`}
                >
                  {!user ? "Sign in to RSVP" : rsvped.has(featured.id!) ? "✓ RSVP'd" : "RSVP Now"}
                </button>
                <span className="text-[#a8e7c5] text-sm">{featured.rsvpCount} attending</span>
              </div>
            </div>
          )}

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => <SkeletonEvent key={i} />)}
            </div>
          ) : events.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-[#e0e0e0]">
              <span className="material-symbols-outlined text-4xl text-[#bfc9c1] mb-2">
                {activeTab === "Past Events" ? "history" : "event"}
              </span>
              <h3 className="text-xl font-bold text-[#002112]">
                {activeTab === "Past Events" ? "No Past Events" : activeTab === "Weekly Meetups" ? "No Weekly Meetups" : "No Upcoming Events"}
              </h3>
              <p className="text-[#404943] mt-2">
                {activeTab === "Upcoming" ? "Check back soon or propose your own event." : "Past events will appear here."}
              </p>
              {activeTab === "Upcoming" && (
                <Link href="/events/propose" className="mt-6 inline-block bg-[#0f5238] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2d6a4f] transition-all">
                  Propose an Event
                </Link>
              )}
            </div>
          ) : (
            <>
              {activeTab === "Upcoming" && events.length > 0 && (
                <h3 className="text-xl font-black text-[#002112] mb-6">More Upcoming Events</h3>
              )}
              <div className="space-y-4">
                {events.map((e) => {
                  const dateInfo = formatDate(e);
                  return (
                    <div key={e.id} className="bg-white rounded-xl p-6 flex items-center gap-6 shadow-[0_4px_24px_rgba(15,82,56,0.06)] hover:shadow-[0_8px_32px_rgba(15,82,56,0.1)] transition-all">
                      <div className="bg-[#0f5238] text-white rounded-xl px-4 py-3 text-center min-w-[60px] shrink-0">
                        <div className="text-xs font-bold uppercase">{dateInfo.month}</div>
                        <div className="text-2xl font-black">{dateInfo.day}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-[#002112]">{e.title}</span>
                          <span className="px-2 py-0.5 bg-[#d5fde2] text-[#0f5238] text-[10px] font-bold rounded uppercase">{e.type}</span>
                        </div>
                        <p className="text-[#404943] text-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">location_on</span>{e.location}
                        </p>
                        <p className="text-[#404943] text-xs mt-1 flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-[#b4ef9d] shrink-0" />
                          Organized by {e.organizerName}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <button
                          onClick={() => handleRsvp(e)}
                          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all mb-1 block ${rsvped.has(e.id!) ? "bg-[#d5fde2] text-[#0f5238]" : "bg-[#0f5238] text-white hover:bg-[#2d6a4f]"}`}
                        >
                          {!user ? "RSVP" : rsvped.has(e.id!) ? "✓ RSVP'd" : "RSVP"}
                        </button>
                        <p className="text-xs text-[#707973]">{e.rsvpCount} attending</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Sidebar Calendar */}
        <div className="w-full md:w-72 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(15,82,56,0.06)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#002112]">{new Date().toLocaleString("en", { month: "long", year: "numeric" })}</h3>
              <div className="flex gap-1">
                <button className="w-7 h-7 rounded-full hover:bg-[#d5fde2] flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-7 h-7 rounded-full hover:bg-[#d5fde2] flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((d, i) => (
                <div key={i} className="text-center text-[10px] font-bold text-[#707973]">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calDays.map((d, i) => (
                <div key={i} className={`text-center text-xs py-1 rounded-full cursor-pointer transition-colors ${d === new Date().getDate() ? "bg-[#0f5238] text-white font-black" : d ? "hover:bg-[#d5fde2] text-[#002112]" : ""}`}>
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#d5fde2] rounded-xl p-6">
            <h3 className="font-bold text-[#002112] mb-2">Host Your Own</h3>
            <p className="text-[#404943] text-sm mb-4">Have an idea for a meetup or workshop? We provide the platform, audience, and logistical support.</p>
            <Link href="/events/propose" className="text-[#0f5238] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn about guidelines <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
