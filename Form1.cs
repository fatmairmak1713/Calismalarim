using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp3
{
    public partial class Form1 : Form
    {
        private char _islem;
        bool _ekrantemizlencekmi;
        int _ilksayi;
        
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btn1_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi) {
             label1.Text = "";
            
                _ekrantemizlencekmi = false;
            }
           
          if (label1.Text == "0") label1.Text = "";
            label1.Text += "1";
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "2";
        }

        private void btn3_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "3";
        }

        private void btn4_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "4";
        }

        private void btn5_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "5";
        }

        private void btn6_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "6";
        }

        private void btn7_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "7";
        }

        private void btn8_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "8";
        }

        private void btn9_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "9";
        }

        private void btn0_Click(object sender, EventArgs e)
        {
            if (_ekrantemizlencekmi)
            {
                label1.Text = "";

                _ekrantemizlencekmi = false;
            }
            if (label1.Text == "0") label1.Text = "";
            label1.Text += "0";
        }

        private void btnartı_Click(object sender, EventArgs e)
        {
            _islem = '+';
            _ekrantemizlencekmi = true;
            _ilksayi = Convert.ToInt32(label1.Text);
        }

        private void btneşit_Click(object sender, EventArgs e)
        {
            int _ikincisayi = Convert.ToInt32(label1.Text);
            int sonuc;
            switch(_islem)
            {
                case '+':
                    sonuc = _ilksayi + _ikincisayi;
                    break;
                case '-':
                    sonuc = _ilksayi - _ikincisayi;
                    break;
                case '*':
                    sonuc = _ilksayi * _ikincisayi;
                    break;
                case '/':
                    sonuc = _ilksayi / _ikincisayi;
                    break;
                    default:
                    sonuc=0;
                    break;
                   
            }
            label1.Text = Convert.ToString(sonuc);
        }

        private void btneksi_Click(object sender, EventArgs e)
        {
            _islem = '-';
            _ekrantemizlencekmi = true;
            _ilksayi = Convert.ToInt32(label1.Text);
        }

        private void btnçarpı_Click(object sender, EventArgs e)
        {
            _islem = '*';
            _ekrantemizlencekmi = true;
            _ilksayi = Convert.ToInt32(label1.Text);
        }

        private void btnbölme_Click(object sender, EventArgs e)
        {
            _islem = '/';
            _ekrantemizlencekmi = true;
            _ilksayi = Convert.ToInt32(label1.Text);
        }

        private void btnsilc_Click(object sender, EventArgs e)
        {
            label1.Text = "";
        }
    }
}
