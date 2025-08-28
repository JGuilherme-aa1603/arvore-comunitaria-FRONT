import React from 'react';
import { mockUserData, mockTreeData, mockCommunityFeed, mockUserRecentActions } from './mocks/data';
import UserAvatar from './components/UserAvatar';
import StatsCard from './components/StatsCard';
import TreeVisual from './components/TreeVisual';
import QuickActionCard from './components/QuickActionCard';

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <UserAvatar initials={mockUserData.initials} />
          <h1 className="text-3xl sm:text-4xl font-bold text-green-900">
            Bem-vindo(a) de volta, {mockUserData.name}!
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TreeVisual level={mockTreeData.growthLevel} stage={mockTreeData.stageName} />
            <QuickActionCard />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Suas Ações Recentes</h3>
              <ul className="space-y-4">
                {mockUserRecentActions.map(item => (
                  <li key={item.id} className="text-gray-700 flex justify-between items-center border-b pb-2">
                    <span>{item.description}</span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <StatsCard title="Ações da Comunidade" value={mockTreeData.totalActions.toLocaleString('pt-BR')} />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Atividade da Comunidade</h3>
              <ul className="space-y-3">
                {mockCommunityFeed.map(item => (
                  <li key={item.id} className="text-sm text-gray-600">
                    <strong>{item.userName}</strong> {item.action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
