import { InjectionToken } from '@angular/core';

export interface AppConfiguration {
  BASE_LOGOUT_URL: string;
  LoginWSO2: string;
  BASE_CALLBACK_URL: string;
  BASE_WSO2_URL: string;
  CLIENT_ID: string;
  production: boolean;
  UtilsUrl: string;
  TeacherUrl: string;
  PortalUrl: string;
  SupportUrl: string;
  HrmUrl: string;
  code_security: string;
  HelpUrl: string;
  document_khai_quat_phan_he: string;
  document_mot_so_tien_ich: string;
  document_doi_mat_khau: string;
  document_quen_mat_khau: string;
  document_quan_ly_tin_nhan: string;
  document_ho_so_ca_nhan: string; 
  document_xem_thong_bao: string;
  document_hoat_dong_dao_tao: string;
  document_thong_tin_ca_nhan: string;
  document_xem_lich_giang: string;
  document_xem_lich_coi_thi: string;
  document_ds_sinh_vien: string;
  document_diem_danh_sv: string;
  document_diem_mon_hoc: string;
  document_nhan_xet_giang_day: string;
  document_duyet_dang_ky: string;
  document_bieu_mau_bao_cao: string;
  document_Ke_hoach_giang_day: string;
  document_Tra_cuu_diem_danh: string;
  document_Lop_hoc: string;
  document_So_len_lop: string;
  document_doi_bu_gio_nghi:string;

}

export const AppConfig = new InjectionToken<AppConfiguration>('@@appConfiguration');
