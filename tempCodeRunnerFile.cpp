#include <iostream>
using namespace std;
class manager{
    private:
        int salary:
            manager(int s);
            {
                salary=s;
            }
    friend void calculate(manager m,scientist s);

};

class tax{
    public:
        void calculate(manager m,scientist s){
            float m_tax,ss_tax;
                m_tax=s_tax0.10;
                s_tax=s.salary0.8;
                cout<< m_tax<<endl;
                cout<<s_tax;
            }

};
int main(){
    manager m1(10000);
    scientist s1(30000);
    tax t1;
    t1.calculate(m1,s1);
    return 0;
}