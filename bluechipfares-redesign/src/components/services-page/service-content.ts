import { m } from '#/paraglide/messages'

export interface ServiceEntry {
  slug: string
  title: string
  detail: string
  points: Array<string>
}

export function getServiceEntries(): Array<ServiceEntry> {
  return [
    {
      slug: 'painting',
      title: m.svc_painting_title(),
      detail: m.svc_painting_detail(),
      points: [
        m.svc_painting_point_1(),
        m.svc_painting_point_2(),
        m.svc_painting_point_3(),
      ],
    },
    {
      slug: 'flooring',
      title: m.svc_flooring_title(),
      detail: m.svc_flooring_detail(),
      points: [
        m.svc_flooring_point_1(),
        m.svc_flooring_point_2(),
        m.svc_flooring_point_3(),
      ],
    },
    {
      slug: 'housekeeping',
      title: m.svc_housekeeping_title(),
      detail: m.svc_housekeeping_detail(),
      points: [
        m.svc_housekeeping_point_1(),
        m.svc_housekeeping_point_2(),
        m.svc_housekeeping_point_3(),
      ],
    },
    {
      slug: 'landscaping',
      title: m.svc_landscaping_title(),
      detail: m.svc_landscaping_detail(),
      points: [
        m.svc_landscaping_point_1(),
        m.svc_landscaping_point_2(),
        m.svc_landscaping_point_3(),
      ],
    },
    {
      slug: 'resurfacing',
      title: m.svc_resurfacing_title(),
      detail: m.svc_resurfacing_detail(),
      points: [
        m.svc_resurfacing_point_1(),
        m.svc_resurfacing_point_2(),
        m.svc_resurfacing_point_3(),
      ],
    },
    {
      slug: 'ac',
      title: m.svc_ac_title(),
      detail: m.svc_ac_detail(),
      points: [m.svc_ac_point_1(), m.svc_ac_point_2(), m.svc_ac_point_3()],
    },
  ]
}
